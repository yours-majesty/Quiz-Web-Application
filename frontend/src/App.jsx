
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";      
import SignUp from "./pages/SignUp"; 
import Quizzes from "./pages/Quizess";   


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/quizzes" element={<Quizzes />} />
        
      </Routes>
    </Router>
  );
}

export default App;

