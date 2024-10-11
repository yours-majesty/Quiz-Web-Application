import { useEffect, useState } from 'react';
import axios from 'axios';

const Quizess = () => {
    const [quizzes, setQuizzes] = useState([]); // Set initial state as an empty array
    const [loading, setLoading] = useState(true); // Add loading state
    const [submissionResponse, setSubmissionResponse] = useState(null); // State for submission response
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchQuizzes = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/quizzes`); // Adjust the API endpoint
            console.log(response.data); // Log the response

            // Check if the response data is an array before setting the state
            if (Array.isArray(response.data)) {
                setQuizzes(response.data);
            } else {
                console.error('Expected an array but got:', response.data);
            }
        } catch (error) {
            console.error('Error fetching quizzes:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    useEffect(() => {
        fetchQuizzes();
    }, []);

    // State to store user answers
    const [userAnswers, setUserAnswers] = useState({});

    // Handle option change
    const handleOptionChange = (quizId, questionIndex, value) => {
        setUserAnswers((prev) => ({
            ...prev,
            [quizId]: {
                ...(prev[quizId] || {}),
                [questionIndex]: value,
            },
        }));
    };

    // Handle the submission of answers
    const handleSubmit = async (quizId) => {
        const answers = userAnswers[quizId]; // Get user's answers for the quiz
        try {
            const response = await axios.post(`${backendUrl}/api/quizzes/${quizId}/submit`, { answers });
            setSubmissionResponse(response.data); // Store submission response
            console.log(response.data); // Log the response

            // Clear user answers after submission
            setUserAnswers((prev) => ({
                ...prev,
                [quizId]: {}, // Reset answers for the submitted quiz
            }));
        } catch (error) {
            console.error('Error submitting quiz:', error);
            setSubmissionResponse({ message: 'Error submitting quiz, please try again.' });
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">All Quizzes</h1>
            
            {/* Display submission response if available */}
            {submissionResponse && (
                <div className={`mt-6 p-4 rounded-lg text-center ${submissionResponse.message ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    <p className="font-medium">{submissionResponse.message}</p>
                    {submissionResponse.score !== undefined && (
                        <p className="text-xl font-bold">Your Score: {submissionResponse.score}</p>
                    )}
                </div>
            )}

            {loading ? ( // Show loading indicator while fetching data
                <div className="text-center">
                    <p className="text-xl">Loading quizzes...</p>
                </div>
            ) : Array.isArray(quizzes) && quizzes.length > 0 ? (
                quizzes.map((quiz) => (
                    <div key={quiz._id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h2 className="text-3xl font-semibold text-blue-500">{quiz.title}</h2>
                        {/* Render questions and options here */}
                        {quiz.questions.map((question, index) => (
                            <div key={index} className="mb-4">
                                <p className="font-medium text-lg text-gray-800">{question.question}</p>
                                {/* Render options for the question */}
                                {question.options.map((option, optIndex) => (
                                    <label key={optIndex} className="block mb-2">
                                        <input
                                            type="radio"
                                            name={`question${index}`}
                                            value={option}
                                            className="mr-2"
                                            onChange={() => handleOptionChange(quiz._id, index, option)} // Handle option change
                                        />
                                        {option}
                                    </label>
                                ))}
                                {/* Add a styled hr tag after each question */}
                                <hr className="my-4 border-t-2 border-blue-600 opacity-50" />
                            </div>
                        ))}
                        <div className="text-center">
                            <button
                                onClick={() => handleSubmit(quiz._id)} // Pass quiz ID to handleSubmit
                                className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-800 transition duration-300"
                            >
                                Submit Answers
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center">
                    <p className="text-xl">No quizzes available.</p>
                </div>
            )}
        </div>
    );
};

export default Quizess;

