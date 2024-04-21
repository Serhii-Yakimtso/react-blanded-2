import { Form, Text } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = text => {
    console.log(text);
    setTodo(prewState => {
      return [...prewState, { text, id: nanoid() }];
    });
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
