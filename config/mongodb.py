import motor.motor_asyncio
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB connection
MONGODB_URL = os.getenv("MONGODB_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")

# Create async MongoDB client
client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
database = client[DATABASE_NAME]

# Collections
contacts_collection = database.contacts

async def get_database():
    """Get database instance"""
    return database

async def get_contacts_collection():
    """Get contacts collection"""
    return contacts_collection

async def close_mongo_connection():
    """Close MongoDB connection"""
    client.close()
