from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import products, contact
import os

app = FastAPI(title="AMA Fruits API", version="1.0.0")

origins = [
    "http://localhost:5173",
    "https://amafruits-frontend.onrender.com",
    os.getenv("FRONTEND_URL", ""),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)
app.include_router(contact.router)

@app.get("/")
def root():
    return {"app": "AMA Fruits", "status": "running"}