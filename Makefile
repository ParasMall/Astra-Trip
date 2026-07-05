.PHONY: dev-frontend dev-backend install-frontend install-backend

# Start the frontend dev server
dev-frontend:
	cd frontend && npm run dev

# Start the backend dev server
dev-backend:
	cd backend && uvicorn main:app --reload --port 8000

# Install frontend dependencies
install-frontend:
	cd frontend && npm install

# Install backend dependencies
install-backend:
	cd backend && pip install -r requirements.txt
