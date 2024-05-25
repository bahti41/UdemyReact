import React, { useState } from "react";

const TaskCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };
  return (
    <>
      <div className="task-create">
        <h3>Lütfen Task Ekleyiniz!!</h3>
        <form className="TaskForm">
          <label className="task-label">Başlık</label>
          <input value={title} onChange={handleChange} className="task-imput" />
          <label className="task-label">Task Giriniz</label>
          <textarea
            value={taskDesc}
            onChange={handleTaskChange}
            className="task-imput"
            rows={5}
          />
          <button className="task-button" onClick={handleSubmit}>
            Oluştur
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskCreate;
