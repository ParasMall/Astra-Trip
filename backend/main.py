from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
try:
    from core.config import settings
    PROJECT_NAME = settings.PROJECT_NAME
    VERSION = settings.VERSION
    ORIGINS = settings.BACKEND_CORS_ORIGINS
except Exception:
    import os
    PROJECT_NAME = os.getenv("PROJECT_NAME", "AstraTrip API")
    VERSION = os.getenv("VERSION", "0.0.0")
    ORIGINS = ["http://localhost:5173"]

app = FastAPI(title=PROJECT_NAME, version=VERSION)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to AstraTrip API"}
