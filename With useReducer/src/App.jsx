import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./data";
import taskReducer from "./reducers/taskReducer";
import "./style.css";

const App = () => {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const getNextId = (data) => {
    const maxId = data.reduce(
      (prev, curv) => (prev && prev.id > curv.id ? prev.id : curv.id),
      0
    );

    return maxId + 1;
  };
  //handlers
  function handleAddTask(text) {
    //dispatch means in bangla peron kora
    //ei portion tai ki kaj korbo action obj er through te declar kore and kon data gula pass kora lagbe lagbe oi gula pass kora lage ja receive kore redecure file ta.
    dispatch(
      //action obj
      {
        //type: 'what_happened',
        type: "added",
        id: getNextId(tasks),
        text: text,
      }
    );
  }
  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDeleteTask(taskID) {
    dispatch({
      type: "deleted",
      id: taskID,
    });
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
