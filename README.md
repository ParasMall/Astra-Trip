# AstraTrip

AI-Powered Intelligent Travel Planner.

## Development Setup

This project uses a decoupled React + FastAPI architecture.

### 1. Backend (FastAPI)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
Runs on `http://localhost:8000`

### 2. Frontend (React/Vite)
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`

## Environment Variables
Copy `.env.example` to `.env` in the root folder and provide the necessary API keys.