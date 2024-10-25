import React, { useState } from "react";
import {  FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (


<form onSubmit={(e) => handleEdit(e, todo.id)} className="mb-4 ">
    <div className="flex items-center justify-between p-3  rounded-lg shadow-lg space-x-4">
        {edit ? (
            <input
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                type="text"
                className="p-2 border border-gray-300 rounded-md outline-none w-full focus:ring-2 focus:ring-blue-500"
            />
        ) : todo.isDone ? (
            <s className="text-gray-600 text-lg">{todo.todo}</s>
        ) : (
            <div className="text-gray-800 text-lg">{todo.todo}</div>
        )}

        <div className="flex items-center space-x-4 text-gray-700">
            <span
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
                onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}
            >
                <FaRegEdit size={20} />
            </span>
            <span
                className="cursor-pointer hover:text-red-600 transition-colors duration-200"
                onClick={() => handleDelete(todo.id)}
            >
                <MdAutoDelete size={20} />
            </span>
            <span
                className="cursor-pointer hover:text-green-600 transition-colors duration-200"
                onClick={() => handleDone(todo.id)}
            >
                <MdOutlineFileDownloadDone size={20} />
            </span>
        </div>
    </div>
</form>


  );
};

export default TodoCard;
