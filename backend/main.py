from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.contact import router as contact_router
from config.firebase import initialize_firebase
import logging
import os

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Get environment variable for allowed origins - allow any localhost port
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:3000,http://localhost:4173,http://localhost:8080,http://127.0.0.1:5173,http://127.0.0.1:3000,http://127.0.0.1:4173,http://127.0.0.1:8080").split(",")

app = FastAPI(
    title="Viral Electronics API",
    description="API for Viral Electronics contact form and other functionalities.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    try:
        initialize_firebase()
        logger.info("Firebase initialized successfully on startup.")
        logger.info(f"CORS allowed origins: {ALLOWED_ORIGINS}")
    except Exception as e:
        logger.error(f"Error during startup: {e}")
        raise 

app.include_router(contact_router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Viral Electronics API. Use the /docs endpoint to explore the API."}

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "API is running smoothly."}

@app.get("/health/detailed")
async def detailed_health_check():
    """Detailed health check that tests Firebase connectivity"""
    health_status = {
        "status": "ok",
        "timestamp": "2024-01-01T00:00:00Z",
        "services": {}
    }
    
    try:
        # Test Firebase connectivity
        from config.firebase import get_firestore_client
        db = get_firestore_client()
        # Try to access a collection to test connectivity
        db.collection('test').limit(1).get()
        health_status["services"]["firebase"] = {
            "status": "healthy",
            "message": "Firebase connection successful"
        }
    except Exception as e:
        health_status["services"]["firebase"] = {
            "status": "unhealthy",
            "message": f"Firebase connection failed: {str(e)}"
        }
        health_status["status"] = "degraded"
    
    # Check environment variables
    env_vars = {
        "FIREBASE_PROJECT_ID": os.getenv("FIREBASE_PROJECT_ID"),
        "MAIL_USERNAME": os.getenv("MAIL_USERNAME"),
        "MAIL_PASSWORD": "***" if os.getenv("MAIL_PASSWORD") else None,
        "MAIL_FROM": os.getenv("MAIL_FROM"),
        "NOTIFICATION_EMAIL": os.getenv("NOTIFICATION_EMAIL")
    }
    
    health_status["environment"] = {
        "firebase_configured": bool(os.getenv("FIREBASE_PROJECT_ID")),
        "email_configured": all([
            os.getenv("MAIL_USERNAME"),
            os.getenv("MAIL_PASSWORD"),
            os.getenv("MAIL_FROM"),
            os.getenv("NOTIFICATION_EMAIL")
        ])
    }
    
    return health_status

@app.post("/test-contact")
async def test_contact():
    """Test endpoint to verify the contact form can receive data"""
    return {"message": "Test endpoint working", "status": "success"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)