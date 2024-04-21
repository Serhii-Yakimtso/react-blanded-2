import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    // console.log(text);
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(text);
    addTodo(text);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={text}
        onChange={handleChange}
      />
    </form>
  );
};
