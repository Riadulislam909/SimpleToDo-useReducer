import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./data";
import "./style.css";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, curv) => (prev && prev.id > curv.id ? prev.id : curv.id),
      0
    );

    return maxId + 1;
  };
  //handlers
  function handleAddTask(text) {
    setTasks([...tasks, { id: getNextId(tasks), text: text, done: false }]);
  }
  function handleChangeTask(task) {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  }
  function handleDeleteTask(taskID) {
    let filtered = tasks.filter((task) => task.id !== taskID);
    setTasks(filtered);
  }
  return (
    <>
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
