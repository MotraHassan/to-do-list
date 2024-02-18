import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import TaskCard from "./TaskCard";
import { TasksContext } from "../context/TasksContext";
let generateId = 3;

export default function Tasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [filterTasks, setFilterTasks] = useState("all");

  function addNewTask() {
    const addTask = [
      ...tasks,
      { id: generateId++, title: taskTitle, content: "", done: false },
    ];
    if (taskTitle !== "") {
      setTasks(addTask);
      localStorage.setItem("tasks", JSON.stringify(addTask));
    }
    setTaskTitle("");
  }

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Card
        sx={{
          width: "600px",
          p: "10px",
          flexDirection: "column",
          m: "auto",
          mt: "150px",
        }}
        className="flex card-tasks"
      >
        <Typography variant="h3" component="h1">
          Tasks
        </Typography>
        <Divider sx={{ width: "100%", mb: 3 }} />
        <ButtonGroup variant="outlined" >
          <Button
            className={filterTasks === "all" ? "btnActive" : ""}
            onClick={() => setFilterTasks("all")}
          >
            All
          </Button>
          <Button
            className={filterTasks === "done" ? "btnActive" : ""}
            onClick={() => setFilterTasks("done")}
          >
            Done
          </Button>
          <Button
            className={filterTasks === "not-done" ? "btnActive" : ""}
            onClick={() => setFilterTasks("not-done")}
          >
            Not Done
          </Button>
        </ButtonGroup>
        {/* Array Tasks */}
        <TaskCard {...{ filterTasks }} />
        {/* Add Task Input */}
        <Box className="flex" sx={{ width: "100%", mt: 3 }}>
          <TextField
            sx={{ flexGrow: "1.5" }}
            label="Task Title"
            variant="outlined"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <Button
            sx={{ flexGrow: "1", height: "55px", ml: "10px" }}
            variant="contained"
            onClick={addNewTask}
            disabled={taskTitle === ""}
          >
            Add
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
