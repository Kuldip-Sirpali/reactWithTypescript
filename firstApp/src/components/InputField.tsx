import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo,handleAddTodo }) => {
  return (
<div className="flex items-center justify-center  bg-gray-100">
    <form
        onSubmit={handleAddTodo}
        className="flex items-center space-x-3 bg-white p-4 rounded-md shadow-md"
    >
        <input
            type="text"
            placeholder="Enter task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
            Create
        </button>
    </form>
</div>

  );
};

export default InputField;
