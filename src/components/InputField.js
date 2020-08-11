import React, { useState } from 'react';

const InputField = ({ check }) => {
  const [value, setValue] = useState('');
  const [desktop, setDesktop] = useState(true);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
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
            maxLength='1'
            value={value}
            className='input-letter'
            onChange={handleChange}
          />
          <button onClick={(() => check(value), () => setValue(''))}>
            Check
          </button>
        </>
      )}
    </div>
  );
};

export default InputField;
