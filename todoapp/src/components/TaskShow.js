import React from "react";

const TaskShow = ({ task, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  console.log(task);
  return (
    <>
      <div className="taskShow">
        <h3 className="task-title">Görevimiz</h3>
        <p>{task.title}</p>
        <h3 className="task-title">Yapılacaklar</h3>
        <p>{task.taskDesc}</p>
        <div>
          <button className="task-delete" onClick={handleDeleteClick}>
            Sil
          </button>
          <button className="task-edit">Güncelle</button>
        </div>
      </div>
    </>
  );
};

export default TaskShow;
