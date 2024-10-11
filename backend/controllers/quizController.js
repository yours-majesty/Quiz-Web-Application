const Quiz = require('../models/quizModel');  

// Get all quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error fetching quizzes' });  
  }
};

// Get details of a specific quiz
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId); // Fetch quiz by ID
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });  
    }
    res.status(200).json(quiz); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error fetching quiz' }); 
  }
};

// Submit quiz answers
exports.submitQuiz = async (req, res) => {
  const { answers } = req.body;
  try {
    const quiz = await Quiz.findById(req.params.quizId); 
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });  
    }

    let score = 0; 
    quiz.questions.forEach((question, index) => {
     
      if (question.correctAnswer === answers[index]) {
        score++; 
      }
    });

    res.status(200).json({ message: 'Quiz submitted successfully', score }); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error submitting quiz' });  
  }
};
