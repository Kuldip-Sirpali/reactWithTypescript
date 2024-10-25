import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

// let name: string;
// let age: number;

// let isAdmin: boolean;

// let hobbies: string[];
// let role: [number, string]; //tuple

// let printName: (name: string) => never; // return nothing not even undefined  but void return undefined

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "user",
//   age: 1,
// };
// let lotsOfPerson: Person[];

// let personName: unknown;

// interface Person {
//   name: string;
//   age?: number;
// }

// interface boy extends Person {
//   profession: string;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <span className="w-full max-w-md space-y-4">
        <InputField
            todo={todo}
            setTodo={setTodo}
            handleAddTodo={handleAddTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} />
    </span>
</div>

  );
};

export default App;