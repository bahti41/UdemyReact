import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TasksContext from "./context/task";
import { useEffect, useContext } from "react";

function App() {
  const { fetchTasks } = useContext(TasksContext);
  // Get işlemi icin useEffect
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
