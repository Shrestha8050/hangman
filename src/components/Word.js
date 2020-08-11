import React, { useState } from 'react';

const Word = ({ selectedWord, correctLetters }) => {
  const [hint, setHint] = useState(false);
  return (
    <div className='word'>
      <div className='hint'>
        <button onClick={() => setHint(!hint)}>Hint :</button>

        <p>
          {hint ? (
            <>
              Words first letter starts with &nbsp;
              {selectedWord[0].toUpperCase()}
            </>
          ) : (
            ''
          )}
        </p>
      </div>

      {selectedWord.split('').map((letter, i) => {
        return (
          <span className='letter' key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
