"use client";

import { useState, useEffect } from "react";
import Button from "../button/Button";
import TodoItem from "../todoItem/TodoItem";
import { v4 as uuid } from "uuid";
import { ITodo } from "@/types";
import toast from "react-hot-toast";

const Todo = () => {
  const [value, setValue] = useState("");
  const [activeTodo, setActiveTodo] = useState<null | ITodo>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim() === "") {
      toast.error("Sorry, can't add empty todo");
      return;
    }

    setTodos([...todos, { id: uuid(), todo: value, isCompleted: false }]);

    setValue("");
    toast.success("New todo added!");
  };

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTodos = todos.map((item) =>
      item.id === activeTodo?.id ? { ...item, todo: value } : item
    );

    setTodos(updatedTodos);
    setValue("");
    setActiveTodo(null);
    toast.success("Updated todo!");
  };

  const handleClearAll = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos.length === 0) return;

    setTodos([]);
    localStorage.setItem("todos", JSON.stringify([]));
    toast.error("All todos deleted");
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    setTodos(storedTodos ? JSON.parse(storedTodos) : []);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div
      className="max-w-full w-[420px] px-5 py-7 rounded-lg text-white
     bg-[#1A1A40]"
    >
      <form>
        <h1 className="text-3xl font-bold capitalize text-center">
          Personal todo list
        </h1>
        <div className="my-6 flex flex-col xm:flex-row gap-2 xm:gap-0">
          <input
            type="text"
            placeholder="Enter today's task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 px-4 py-2 border-[1px] border-solid 
            border-[#bca5ae] bg-transparent"
          />
          {activeTodo === null ? (
            <Button
              variant="secondary"
              size="small"
              handleClick={handleAddTodo}
            >
              Add Task
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="small"
              handleClick={handleSaveTask}
            >
              Save Task
            </Button>
          )}
        </div>
        <div className="h-[170px] overflow-y-auto flex flex-col gap-3">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              setValue={setValue}
              todos={todos}
              setTodos={setTodos}
              setActiveTodo={setActiveTodo}
            />
          ))}
        </div>
        <div className="w-full mt-5 flex justify-between items-center">
          <p className="text-gray-300">
            You have {todos.length}{" "}
            <span>{todos.length > 1 ? "todos" : "todo"}</span>
          </p>
          <Button variant="secondary" size="small" handleClick={handleClearAll}>
            Clear All
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Todo;
