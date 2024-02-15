//1. Declare the current state (tasks) as the first argument.
//2. Declare the action object as the second argument.
//3. Return the next state from the reducer (which React will set the state to).

export default function taskReducer(tasks, action) {
  if (action.type === "added") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === "changed") {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "deleted") {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error("Unkown action " + action.type);
  }
}
