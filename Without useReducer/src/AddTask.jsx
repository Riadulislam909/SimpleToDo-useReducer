import { useState } from "react";
import "./data";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
