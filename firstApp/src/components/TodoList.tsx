import React from "react";
import { Todo } from "../model";
import TodoCard from "./TodoCard";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
    <TodoCard  todo={todo}  key={todo?.id}  todos={todos}
    setTodos={setTodos}
    />
      ))}
    </div>
  );
};

export default TodoList;
