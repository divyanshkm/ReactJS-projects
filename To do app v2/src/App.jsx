import { useState, createContext } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
export const deleteContext = createContext();
function App() {
  const [tasksList, setTasksList] = useState(["Test1", "Test2", "Test3"]);
  const [newTask, setNewTask] = useState("");
  function handleAdd(newTask) {
    const newTaskList = [...tasksList, newTask];
    setTasksList(newTaskList);
  }
  function handleEdit(index) {
    let taskToEdit = tasksList[index];
    setNewTask(taskToEdit);
    handleDelete(index);
  }

  function handleDelete(index) {
    const newTaskList = tasksList.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    setTasksList(newTaskList);
  }
  return (
    <>
      <TodoInput handleAdd={handleAdd}></TodoInput>
      <deleteContext.Provider value={handleDelete}>
        <TodoList tasksList={tasksList} handleDelete={handleDelete}></TodoList>
      </deleteContext.Provider>
    </>
  );
}

export default App;
