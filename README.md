
---

## Project Setup

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yours-majesty/Quiz-Web-Application.git
cd Quiz-Web-Application
```

### 2. Backend Setup

Navigate to the backend directory and install the necessary dependencies:

```bash
cd backend
npm install
```

#### Configure Environment Variables

Create a `.env` file in the `backend` folder with the following keys:

```env
MONGO_URI=your-mongo-uri
JWT_SECRET=your-jwt-secret
PORT=5000
```

#### Start the Backend Server

Run the backend server in development mode:

```bash
npm run dev
```

The backend server will be running at `http://localhost:5000`.

### 3. Frontend Setup

Move to the frontend directory and install the dependencies:

```bash
cd ../frontend
npm install
```

#### Configure Frontend Environment Variables

Create a `.env` file in the `frontend` folder:

```env
VITE_BACKEND_URL=http://localhost:5000
```

#### Start the Frontend Server

Run the following command to start the frontend server:

```bash
npm run dev
```

The frontend server will be running at `http://localhost:5173`.

### 4. MongoDB Setup

Ensure you have a MongoDB database available. You can either set up MongoDB locally or use [MongoDB Atlas](https://www.mongodb.com/atlas).

Update the `MONGO_URI` in your backend's `.env` file with your MongoDB connection string.

### 5. Running the Application

Once both servers are running, open your browser and go to:

```
http://localhost:5173
```

You can now use the app to register, log in, and take quizzes.

---
