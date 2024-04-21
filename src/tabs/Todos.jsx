import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(window.localStorage.getItem('todos')) || [];
  });

  const addTodo = text => {
    console.log(text);
    setTodo(prewState => {
      return [...prewState, { text, id: nanoid() }];
    });
  };
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Form addTodo={addTodo} />
      {todo.length > 0 ? (
        <TodoList todos={todo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
