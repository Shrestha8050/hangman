import React, { useEffect } from 'react';
import { checkWin } from '../Helpers/Helpers';
const PopUp = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let FinalMessage = '';
  let finalMessageRevealedWord = '';
  let playable = true;
  const correectWord = selectedWord.toUpperCase();
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    FinalMessage = ' Congratulation ! You Won';
    finalMessageRevealedWord = `You successfully gussed word  ${correectWord}`;
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    FinalMessage = 'Unfortunately you lost';
    finalMessageRevealedWord = `..the word was ${correectWord}`;
    playable = false;
  } else {
  }
  useEffect(() => setPlayable(playable));
  return (
    <div
      className='popup-container'
      style={FinalMessage !== '' ? { display: 'flex' } : {}}
    >
      <div className='popup'>
        <h2>{FinalMessage}</h2>
        <h3>{finalMessageRevealedWord}</h3>
        <button id='play-button' onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default PopUp;
