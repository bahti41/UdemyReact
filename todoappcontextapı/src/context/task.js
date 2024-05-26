import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
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

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
