const mongoose = require('mongoose');
const Quiz = require('../models/quizModel');

const sampleQuizzes = [
  {
    title: "General Knowledge Quiz",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee",
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        correctAnswer: "Au",
      },
    ],
  },
];


const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    await Quiz.deleteMany(); 
    await Quiz.insertMany(sampleQuizzes); // Use the new sample quizzes
    console.log("Database Connected and Sample Data Inserted");
  } catch (error) {
    console.log("Failed to connect Database", error.message);
  }
};

module.exports=db;
