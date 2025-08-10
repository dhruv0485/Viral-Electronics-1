from fastapi import APIRouter, HTTPException, status
from models.contact import ContactForm, ContactResponse
from config.firebase import get_firestore_client
from config.email import send_email
from datetime import datetime
import logging 
import asyncio
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/", response_model=ContactResponse, status_code = status.HTTP_201_CREATED)

async def save_contact_form(contact_data: ContactForm):
    try:
        db = get_firestore_client()

        contact_dict = contact_data.dict()
        contact_dict['timestamp'] = datetime.now()
        contact_dict['status'] = 'new'
        contact_dict['source'] = 'website'

        doc_ref = db.collection('contacts').add(contact_dict)
        doc_id = doc_ref[1].id
        logger.info(f"Contact form saved with ID: {doc_id}")

        try:
            def send_email_sync():
                import asyncio
                return asyncio.run(send_email(contact_dict))
            
            # Run in thread pool
            loop = asyncio.get_event_loop()
            await loop.run_in_executor(None, send_email_sync)
            logger.info("Email notification sent successfully")
        except Exception as email_error:
            logger.error(f"Failed to send email : {email_error}")

        return ContactResponse(
            success=True,
            message="Contact form submitted successfully.",
            id=doc_id,
            timestamp=datetime.now().isoformat()
        )
    
    except ValueError as ve:
        logger.error(f"Validation error: {ve}")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail=str(ve))
    
    except Exception as e: 
        logger.error(f"Error saving contact form: {e}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error")