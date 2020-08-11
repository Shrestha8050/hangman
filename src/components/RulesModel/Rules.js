import React from 'react';
import Modal from 'react-awesome-modal';
const Rules = ({ visible, setVisible }) => {
  const setCloseModal = () => {
    setVisible(false);
  };
  return (
    <Modal
      visible={visible}
      width='80%'
      height='600'
      effect='fadeInUp'
      onClickAway={() => setCloseModal()}
    >
      <div className='rules'>
        <div className='objectives'>
          <h1>Objective</h1>
          <p>Guess the word/phrase before your man gets hung!</p>
        </div>
        <ol type='1'>
          <li> First, select a letter of the alphabet </li>
          <li>
            If the letter is contained in the word/phrase, the you can take
            another turn guessing a letter
          </li>
          <li>
            If the letter is not contained in the word/phrase, a portion of the
            hangman is added.
          </li>
          <li>
            The game continues until:
            <ol type='a'>
              <li>
                the word/phrase is guessed (all letters are revealed) – WINNER
              </li>
              <li>all the parts of the hangman are displayed – LOSER</li>
            </ol>
          </li>
        </ol>

        <div onClick={() => setCloseModal()}>
          <button className='rulesBtn'>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default Rules;
