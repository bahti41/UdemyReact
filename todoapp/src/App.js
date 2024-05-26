import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  // creat işlemi icin
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3041/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };
  // Get işlemi
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3041/tasks");
    setTasks(response.data);
  };
  // Get işlemi icin useEffect
  useEffect(() => {
    fetchTasks();
  }, []);
  // Deleted işlemi
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3041/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  // Update işlemi
  const editTaskById = async (id, updateTitle, updateTaskDesc) => {
    await axios.put(`http://localhost:3041/tasks/${id}`, {
      title: updateTitle,
      taskDesc: updateTaskDesc,
    });
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: id, title: updateTitle, taskDesc: updateTaskDesc };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
