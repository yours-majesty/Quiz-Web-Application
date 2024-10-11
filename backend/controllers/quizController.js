const Quiz = require('../models/quizModel'); // Ensure this is the correct path to your Quiz model

// Get all quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find(); // Fetch all quizzes from the database
    res.status(200).json(quizzes); // Return the quizzes with a 200 OK status
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Error fetching quizzes' }); // Return a 500 Internal Server Error
  }
};

// Get details of a specific quiz
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId); // Fetch quiz by ID
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' }); // Return a 404 if the quiz doesn't exist
    }
    res.status(200).json(quiz); // Return the quiz details with a 200 OK status
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Error fetching quiz' }); // Return a 500 Internal Server Error
  }
};

// Submit quiz answers
exports.submitQuiz = async (req, res) => {
  const { answers } = req.body; // User's answers array
  try {
    const quiz = await Quiz.findById(req.params.quizId); // Fetch quiz by ID
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' }); // Return a 404 if the quiz doesn't exist
    }

    let score = 0; // Initialize score
    quiz.questions.forEach((question, index) => {
      // Compare user's answers with correct answers
      if (question.correctAnswer === answers[index]) {
        score++; // Increment score for each correct answer
      }
    });

    res.status(200).json({ message: 'Quiz submitted successfully', score }); // Return success message with score
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Error submitting quiz' }); // Return a 500 Internal Server Error
  }
};
