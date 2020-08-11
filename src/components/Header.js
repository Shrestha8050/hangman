import React from 'react';

const Header = ({ setVisible }) => {
  return (
    <header>
      <h1>Hang Man Games</h1>
      <p>Play for fun</p>
      <button onClick={() => setVisible(true)}>Rules</button>
    </header>
  );
};

export default Header;
