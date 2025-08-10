from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes.contact import router as contact_router
from backend.config.mongodb import get_database, close_mongo_connection
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
        # Test MongoDB connection
        db = await get_database()
        logger.info("MongoDB connected successfully on startup.")
        logger.info(f"CORS allowed origins: {ALLOWED_ORIGINS}")
    except Exception as e:
        logger.error(f"Error during startup: {e}")
        raise 

@app.on_event("shutdown")
async def shutdown_event():
    try:
        await close_mongo_connection()
        logger.info("MongoDB connection closed successfully.")
    except Exception as e:
        logger.error(f"Error during shutdown: {e}")

app.include_router(contact_router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Viral Electronics API. Use the /docs endpoint to explore the API."}

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "API is running smoothly."}

@app.get("/health/detailed")
async def detailed_health_check():
    """Detailed health check that tests MongoDB connectivity"""
    health_status = {
        "status": "ok",
        "timestamp": "2024-01-01T00:00:00Z",
        "services": {}
    }
    
    try:
        # Test MongoDB connectivity
        db = await get_database()
        # Try to access a collection to test connectivity
        await db.list_collection_names()
        health_status["services"]["mongodb"] = {
            "status": "healthy",
            "message": "MongoDB connection successful"
        }
    except Exception as e:
        health_status["services"]["mongodb"] = {
            "status": "unhealthy",
            "message": f"MongoDB connection failed: {str(e)}"
        }
        health_status["status"] = "degraded"
    
    # Check environment variables
    env_vars = {
        "MONGODB_URL": os.getenv("MONGODB_URL"),
        "DATABASE_NAME": os.getenv("DATABASE_NAME"),
        "MAIL_USERNAME": os.getenv("MAIL_USERNAME"),
        "MAIL_PASSWORD": "***" if os.getenv("MAIL_PASSWORD") else None,
        "MAIL_FROM": os.getenv("MAIL_FROM"),
        "NOTIFICATION_EMAIL": os.getenv("NOTIFICATION_EMAIL")
    }
    
    health_status["environment"] = {
        "mongodb_configured": bool(os.getenv("MONGODB_URL")),
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