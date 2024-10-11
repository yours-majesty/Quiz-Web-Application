Setup Instructions
Follow the steps below to run the project locally:

1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
2. Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install backend dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and configure it with your environment variables:

env
Copy code
MONGO_URI=your-mongo-uri
JWT_SECRET=your-jwt-secret
PORT=5000
Start the backend server:

bash
Copy code
npm start
The backend server will run at http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
Install frontend dependencies:

bash
Copy code
npm install
Create a .env file in the frontend directory and configure it:

env
Copy code
VITE_BACKEND_URL=http://localhost:5000
Start the frontend server:

bash
Copy code
npm run dev
The frontend will be running at http://localhost:5173.

4. MongoDB Setup
Set up a MongoDB Atlas account or use your local MongoDB.
Configure the MongoDB connection string in the .env file of your backend (MONGO_URI).
5. Testing the App
After both servers are running, open http://localhost:5173 in your browser.
Create an account and start taking quizzes!
