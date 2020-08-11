import React, { useState } from 'react';

const InputField = ({ check }) => {
  const [desktop, setDesktop] = useState(true);

  return (
    <div className='input-field'>
      <div className='ask'>
        <p>Are you in Desktop or in mobile</p>
        <button onClick={() => setDesktop(true)}> Desktop</button>
        <button onClick={() => setDesktop(false)}> Mobile</button>
      </div>
      {desktop ? null : (
        <>
          <input
            type='text'
            maxLength='0'
            className='input-letter'
            placeholder='Click to open Key Board'
          />
        </>
      )}
    </div>
  );
};

export default InputField;
