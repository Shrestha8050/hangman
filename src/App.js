import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import Figure from './components/Figure';
import WrongLetter from './components/WrongLetters';
import Word from './components/Word';
import { showNotification as show } from './Helpers/Helpers';
import Notification from './components/Notification';
import PopUp from './components/PopUp';
import { Words } from './Data/Words';
import Rules from './components/RulesModel/Rules';
import InputField from './components/InputField';

let selectedWord = Words[Math.floor(Math.random() * Words.length)];
function App() {
  const [playable, setPlayable] = useState(true);
  const [visible, setVisible] = useState(false);

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKey = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const randomNo = Math.floor(Math.random() * Words.length);
    selectedWord = Words[randomNo];
  };

  const check = (value) => {
    setCorrectLetters([value]);
  };

  return (
    <div className='App'>
      <Header setVisible={setVisible} />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetter wrongLetters={wrongLetters} />
        <InputField check={check} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <PopUp
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />

      <Rules visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
