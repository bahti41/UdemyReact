import React from "react";
import TaskShow from "./TaskShow";
import TasksContext from "../context/task";
import { useContext } from "react";

const TaskList = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      <div className="task-list">
        {tasks.map((task) => {
          return <TaskShow key={task.id} task={task} />;
        })}
      </div>
    </>
  );
};

export default TaskList;
