from pydantic import BaseModel, EmailStr
from typing import Optional

class ContactRequest(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str

class Product(BaseModel):
    id: int
    name: str
    description: str
    category: str
    seasonal: bool
