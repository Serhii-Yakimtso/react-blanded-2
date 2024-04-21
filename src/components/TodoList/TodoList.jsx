import { Grid, TodoListItem } from 'components';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <li key={todo.id}>
          <TodoListItem text={todo.text} count={i + 1} />
        </li>
      ))}
    </Grid>
  );
};
