import React, { useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";
import { useContext } from "react";

const TaskShow = ({ task }) => {
  const { deleteTaskById, editTaskById } = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); //<= true
  };

  const handelsubmit = (id, updateTitle, updateTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updateTitle, updateTaskDesc);
  };

  console.log(task);
  return (
    <>
      <div className="taskShow">
        {showEdit ? (
          <TaskCreate
            task={task}
            taskFormUpdate={true}
            onUpdate={handelsubmit}
          />
        ) : (
          <div>
            <h3 className="task-title">Görevimiz</h3>
            <p>{task.title}</p>
            <h3 className="task-title">Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <div>
              <button className="task-delete" onClick={handleDeleteClick}>
                Sil
              </button>
              <button className="task-edit" onClick={handleEditClick}>
                Güncelle
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskShow;
