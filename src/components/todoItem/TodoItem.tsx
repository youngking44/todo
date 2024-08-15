import React from "react";
import toast from "react-hot-toast";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { ITodo } from "@/types";

interface TodoItemProps {
  item: ITodo;
  setValue: (val: string) => void;
  todos: ITodo[];
  setTodos: (value: ITodo[]) => void;
  setActiveTodo: (val: ITodo) => void;
}

const TodoItem = ({
  item,
  setValue,
  todos,
  setTodos,
  setActiveTodo,
}: TodoItemProps) => {
  const handleCompleted = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );

    setTodos(updatedTodos);
  };

  const handleDeleteTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
    toast.error("Todo deleted!");
  };

  const handleEditTodo = (id: string) => {
    const activeTodo = todos.find((todoItem) => todoItem.id === id);

    if (activeTodo?.id) {
      setValue(activeTodo.todo);
      setActiveTodo(activeTodo);
    }
  };

  return (
    <div className="w-full flex items-center gap-2 px-5 py-[10px] rounded-md bg-purple-500">
      <p
        onClick={handleCompleted}
        className={`${
          item.isCompleted ? "line-through text-gray-200/80" : ""
        } flex-1 cursor-pointer`}
      >
        {item.todo}
      </p>
      <div
        className="text-white cursor-pointer"
        onClick={() => handleEditTodo(item.id)}
      >
        <LiaEdit size={25} />
      </div>
      <div className="text-white cursor-pointer" onClick={handleDeleteTodo}>
        <MdDelete size={25} />
      </div>
    </div>
  );
};

export default TodoItem;
