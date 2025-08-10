from fastapi import APIRouter, HTTPException, status
from models.contact import ContactForm, ContactResponse
from config.mongodb import get_contacts_collection
from config.email import send_email
from datetime import datetime
import logging 
import asyncio
import os
from bson import ObjectId

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/", response_model=ContactResponse, status_code = status.HTTP_201_CREATED)
async def save_contact_form(contact_data: ContactForm):
    logger.info(f"Received contact form submission: {contact_data.dict()}")
    
    try:
        # Get MongoDB contacts collection
        try:
            contacts_collection = await get_contacts_collection()
            logger.info("MongoDB contacts collection obtained successfully")
        except Exception as mongo_error:
            logger.error(f"MongoDB connection failed: {mongo_error}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
                detail="Database service unavailable"
            )

        contact_dict = contact_data.dict()
        contact_dict['timestamp'] = datetime.now()
        contact_dict['status'] = 'new'
        contact_dict['source'] = 'website'

        logger.info(f"Attempting to save contact data: {contact_dict}")
        
        try:
            # Insert document into MongoDB
            result = await contacts_collection.insert_one(contact_dict)
            doc_id = str(result.inserted_id)
            logger.info(f"Contact form saved with ID: {doc_id}")
        except Exception as db_error:
            logger.error(f"Failed to save to database: {db_error}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
                detail="Failed to save contact form"
            )

        # Try to send email notification (optional)
        email_sent = False
        if all([
            os.getenv("MAIL_USERNAME"),
            os.getenv("MAIL_PASSWORD"),
            os.getenv("MAIL_FROM"),
            os.getenv("NOTIFICATION_EMAIL")
        ]):
            try:
                def send_email_sync():
                    import asyncio
                    return asyncio.run(send_email(contact_dict))
                
                # Run in thread pool
                loop = asyncio.get_event_loop()
                await loop.run_in_executor(None, send_email_sync)
                logger.info("Email notification sent successfully")
                email_sent = True
            except Exception as email_error:
                logger.error(f"Failed to send email: {email_error}")
                # Don't fail the entire request if email fails
        else:
            logger.warning("Email configuration incomplete, skipping email notification")

        return ContactResponse(
            success=True,
            message="Contact form submitted successfully." + (" Email notification sent." if email_sent else ""),
            id=doc_id,
            timestamp=datetime.now().isoformat()
        )
    
    except HTTPException:
        # Re-raise HTTP exceptions
        raise
    except ValueError as ve:
        logger.error(f"Validation error: {ve}")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=str(ve))
    except Exception as e: 
        logger.error(f"Unexpected error saving contact form: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, 
            detail="Internal server error occurred"
        )