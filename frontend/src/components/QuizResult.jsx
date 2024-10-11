import React from 'react';
import { useLocation } from 'react-router-dom';

const QuizResults = () => {
    const location = useLocation();
    const { message, score } = location.state || {};

    return (
        <div className="container mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Quiz Submitted!</h1>
            <p className="text-lg mb-2">{message}</p>
            {score !== undefined && (
                <p className="text-xl font-semibold">Your Score: {score}</p>
            )}
        </div>
    );
};

export default QuizResults;

