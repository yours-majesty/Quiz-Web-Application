const express = require('express');
const quizController = require('../controllers/quizController'); 

const router = express.Router();

router.get('/quizzes', quizController.getAllQuizzes);
router.get('/quizzes/:quizId', quizController.getQuizById);
router.post('/quizzes/:quizId/submit', quizController.submitQuiz);

module.exports = router;
