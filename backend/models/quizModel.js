const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String, // Change to String to match your data
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;

