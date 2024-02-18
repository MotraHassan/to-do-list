import { createContext, useState } from "react";
export const TasksContext = createContext();
export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem('tasks')) || [
    {
      id: 1,
      title: "Leggere Libro ",
      content: "Finirlo Prima del mese di Maggio",
      done:false
    }
  ] );
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>
  );
}
