from pydantic import BaseModel, EmailStr, field_validator
import re
from typing import Optional
from datetime import datetime

class ContactForm(BaseModel):
    name: str
    phone: str
    email: EmailStr
    message: str

    @field_validator('name')
    @classmethod
    def validate_name(cls, v):
        if not v or len(v.strip()) < 2:
            raise ValueError("Name must be at least 2 characters long.")
        return v.strip()
    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v):
        if not v.isdigit():
            raise ValueError("Phone number must contain only digits.")
        return v
    
    @field_validator('email')
    @classmethod
    def validate_email(cls, v):
        if not v or '@' not in v:
            raise ValueError("Invalid email address.")
        return v.lower().strip()
    
    @field_validator('message')
    @classmethod
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
    id: str
    name: str
    phone: str
    email: str
    message: str
    timestamp: datetime
    status: str
    source: str