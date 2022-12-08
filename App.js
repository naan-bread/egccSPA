import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import data from './questions'
import Modal from './Modal';

const App = () => {

  const [currentQuestion, setQuestion] = useState(0);
  const [correctAnswers, setAnswers] = useState([])
  const [score, setScore] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const toggleModal = () => {
    setOpen(!isOpen);
  };


  const checkAnswer = async e => {
    if (correctAnswers.length < 26) {
      if (e.target.innerHTML === data[currentQuestion].correctAnswer) {
        setScore(score + 1);
        setAnswer('Correct');
      } else {
        setAnswer('Wrong');
      };
      setQuestion(currentQuestion + 1);
      correctAnswers.push(data[currentQuestion].correctAnswer + ' ');
      await delay(100);
      toggleModal();
    };

  };

  useEffect(() => {},[currentQuestion]);

  return (
    <div className='App'>
      <Modal open={isOpen}>
          <button onClick={toggleModal} className='modal-button'>
            {answer}
          </button>
      </Modal>
      <div className="wrapper">
        <div className="question-title">
          <h1>{data[currentQuestion].question}</h1>
        </div>
        <div className="question-sets">
          {data[currentQuestion].guesses.map((letter, index) => (<button className='question-buttons' onClick={checkAnswer} key={index}>{letter}</button>))}
        </div>
        <div className="answer-card">
          <h2>Correct Answers:</h2>
          <p className='answer-text'>{correctAnswers}</p>
        </div>
        <div className="score-card">
          <h2>Score:</h2>
          <p className='score-text'>{score}</p>
        </div>
        <div className="restart-button">
          <form action=""><button className='question-buttons'>Start Over</button></form>
        </div>
      </div>
    </div>
    
  );
}

export default App;
