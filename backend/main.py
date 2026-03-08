from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import products, contact

app = FastAPI(title="Amafruits API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)
app.include_router(contact.router)

@app.get("/")
def root():
    return {"app": "amafruits", "status": "running"}
