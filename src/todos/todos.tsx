import { useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const add = () => {
    setTodos((prev) => [...prev, value]);
  };

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Todo App</h1>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Todo"
      />
      <button onClick={add}>Add</button>

      {todos.length === 0 && <p>There are no todos</p>}

      {todos.map((todo) => (
        <p key={todo}>{todo}</p>
      ))}
    </div>
  );
}
