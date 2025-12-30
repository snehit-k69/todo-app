import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([{ id: Date.now(), text: task, completed: false }, ...tasks]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const startEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map(t => (t.id === id ? { ...t, text: editText } : t))
    );
    setEditId(null);
    setEditText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <>
      <h1>To-Do Application</h1>

      <input
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {filteredTasks.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            editId={editId}
            editText={editText}
            setEditText={setEditText}
            onToggle={toggleComplete}
            onEdit={startEdit}
            onSave={saveEdit}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
