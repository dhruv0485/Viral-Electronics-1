from pydantic import BaseModel, EmailStr, validator
import re
from typing import Optional
from datetime import datetime

class ContactForm(BaseModel):
    name: str
    phone: str
    email: EmailStr
    message: str

    @validator('name')
    def validate_name(cls, v):
        if not v or len(v.strip()) < 2:
            raise ValueError("Name must be at least 2 characters long.")
        return v.strip()
    
    @validator('phone')
    def validate_phone(cls, v):
        if not v.isdigit():
            raise ValueError("Phone number must contain only digits.")
        return v
    
    @validator('email')
    def validate_email(cls, v):
        if not v or '@' not in v:
            raise ValueError("Invalid email address.")
        return v.lower().strip()
    
    @validator('message')
    def validate_message(cls, v):
        if not v or len(v.strip()) < 10:
            raise ValueError("Message must be at least 10 characters long.")
        return v.strip()
    
class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None
    timestamp: Optional[str] = None

class ContactData(BaseModel):
    id:str
    name:str
    phone:str
    email:str
    message:str
    timestamp: datetime
    status: str
    source: str