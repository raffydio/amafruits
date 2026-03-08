from fastapi import APIRouter
from models.schemas import Product

router = APIRouter(prefix="/api/products", tags=["products"])

PRODUCTS = [
    Product(id=1, name="Agrumi",         description="Arance, limoni, mandarini", category="Stagionale", seasonal=True),
    Product(id=2, name="Frutti Rossi",   description="Fragole, lamponi, mirtilli", category="Premium",   seasonal=True),
    Product(id=3, name="Frutta Esotica", description="Mango, ananas, papaya",      category="Import",    seasonal=False),
    Product(id=4, name="Mele & Pere",    description="Varietà italiane DOP",       category="Bio",       seasonal=True),
]

@router.get("/", response_model=list[Product])
def get_products():
    return PRODUCTS

@router.get("/{product_id}", response_model=Product)
def get_product(product_id: int):
    return next((p for p in PRODUCTS if p.id == product_id), None)
