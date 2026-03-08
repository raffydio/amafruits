from fastapi import APIRouter
from models.schemas import ContactRequest

router = APIRouter(prefix="/api/contact", tags=["contact"])

@router.post("/")
def submit_contact(data: ContactRequest):
    print(f"[CONTATTO] {data.name} <{data.email}>: {data.message}")
    return {"status": "ok", "message": "Messaggio ricevuto!"}
