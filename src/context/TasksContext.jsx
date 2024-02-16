import { createContext, useState } from "react";
export const TasksContext = createContext();
export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Leggere Libro ",
      content: "Finirlo Prima del mese di Maggioghfsajjjjjjjjjjjjjjjjjj shjhdvav sagfd as",
      done:false
    },
    {
      id: 2,
      title: "Leggere Libro ",
      content: "Finirlo Prima del mese di Maggio",
      done:true
    }
  ]);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>
  );
}
