
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";      
import SignUp from "./pages/SignUp"; 
import Quizzes from "./pages/Quizess";   
import QuizResults from './components/QuizResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/quizzes" element={<Quizzes />} />
         <Route path="/quiz-results" element={<QuizResults />} />
      </Routes>
    </Router>
  );
}

export default App;

