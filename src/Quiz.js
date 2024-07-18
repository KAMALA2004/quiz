import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Tehran', 'Seoul', 'Bangkok'],
      answer: 'Tokyo',
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    {
        question: 'How many players are in cricket team?',
        options: ['11', '10', '5', '7'],
        answer: '11',
      },
      {
        question: 'What is the color of sky?',
        options: ['Blue', 'Red', 'Indigo', 'Pink'],
        answer: 'Blue',
      },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestionIndex].question}
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;