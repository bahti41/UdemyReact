import React, { useState } from "react";

const CreateTask = (props) => {
  const [task, setTask] = useState({ title: "", content: "" });

  const detectChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitTask = (e) => {
    props.onAdd(task);
    setTask({
      title: "",
      content: "",
    });
    e.preventDefault();
  };

  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          className="form-control todotext mb-3"
          name="title"
          value={task.title}
          onChange={detectChange}
          placeholder="Başlık Giriniz ???"
        />

        <textarea
          name="content"
          value={task.content}
          onChange={detectChange}
          placeholder="İcerik Giriniz ???"
          className="form-control todotext mb-3"
          rows={3}
        ></textarea>

        <button className="btn btn-primary todoButton" onClick={submitTask}>
          Ekle
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
