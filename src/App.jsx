import { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [showFinished, setShowFinished] = useState(true);
  const [error, setError] = useState("");
  const maxDescriptionChars = 200;
  const minTodoLength = 5;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  }

  const handleEdit = (id) => {
    const t = todos.find(i => i.id === id);
    if (t) {
      setTodo(t.todo);
      setDescription(t.description);
      setDueDate(t.dueDate);
      setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
    }
  }

  const handleDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
  }

  const handleAdd = () => {
    setError("");

    if (todo.trim().length < minTodoLength) {
      setError(`Todo must be at least ${minTodoLength} characters long.`);
      return;
    }

    const newTodo = { id: uuidv4(), todo, description, dueDate, isCompleted: false };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setTodo("");
    setDescription("");
    setDueDate("");
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= maxDescriptionChars) {
      setDescription(e.target.value);
    }
  }

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  }

  const handleCheckbox = (id) => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      return newTodos;
    });
  }

  return (
    <div className="container mx-3 md:mx-auto my-5 p-5 min-h-[80vh] md:w-7/12">
      <h1 className='font-bold text-center text-2xl'>TodoSage - A wise tool for your task management needs</h1>
      <div className="addTodo my-5 flex flex-col gap-4">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input
          onChange={handleChange}
          value={todo}
          type="text"
          className='w-full rounded-full px-5 py-1 border-2 border-gray-300'
          placeholder="Enter your todo item here"
        />
        <textarea
          onChange={handleDescriptionChange}
          value={description}
          className='w-full rounded-md px-5 py-1 border-2 border-gray-300'
          placeholder="Enter a description for your todo item (optional)"
          maxLength={maxDescriptionChars}
        />
        <p className='text-sm text-gray-500'>
          {description.length}/{maxDescriptionChars} characters
        </p>
        <input
          onChange={handleDueDateChange}
          value={dueDate}
          type="date"
          className='w-full rounded-md px-5 py-1 border-2 border-gray-300'
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleAdd}
          disabled={!todo.trim() || description.length > maxDescriptionChars}
          className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 p-2 py-1 text-sm font-bold text-white rounded-md'>
          Save
        </button>
      </div>
      <div className="flex items-center my-4">
        <input
          className='mr-2'
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        <label>Show Completed Todos</label>
      </div>
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        {todos.length === 0 && <div className='m-5'>Your to-do list is empty! Add a task to get started.</div>}
        {todos.map(item => (
          (showFinished || !item.isCompleted) && (
            <div key={item.id} className="todo-item flex justify-between items-center p-3 bg-white shadow-md rounded-md mb-2">
              <div className='flex items-center'>
                <input
                  name={item.id}
                  onChange={() => handleCheckbox(item.id)}
                  type="checkbox"
                  checked={item.isCompleted}
                  className="mr-2"
                />
                <div className={`todo-text ${item.isCompleted ? "line-through text-gray-500" : ""}`}>
                  <div>{item.todo}</div>
                  {item.description && <div className="text-sm text-gray-500">{item.description}</div>}
                  {item.dueDate && <div className="text-sm text-gray-500">Due: {item.dueDate}</div>}
                </div>
              </div>
              <div className="todo-buttons flex">
                <button
                  onClick={() => handleEdit(item.id)}
                  className='bg-blue-600 hover:bg-blue-800 p-2 py-1 text-sm font-bold text-white rounded-md mr-2'>
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='bg-red-600 hover:bg-red-800 p-2 py-1 text-sm font-bold text-white rounded-md'>
                  <AiFillDelete />
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default App;
