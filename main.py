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

@app.post("/test-contact")
async def test_contact():
    """Test endpoint to verify the contact form can receive data"""
    return {"message": "Test endpoint working", "status": "success"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)