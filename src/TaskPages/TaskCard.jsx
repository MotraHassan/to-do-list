import { DeleteOutline, Done, Edit } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import PopUp from "./PopUp";
import { TasksContext } from "../context/TasksContext";

export default function TaskCard({filterTasks}) {
  const IconStyle = {
    borderRadius: "50%",
    padding: "3px",
    backgroundColor: "white",
    fontSize: "30px",
  };
  const { tasks, setTasks } = useContext(TasksContext);
  const [editTask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [elId, setElId] = useState(null);

  const handleDone=(id)=>{
    let editDone=tasks.map((task)=>{
      if (task.id===id) {
        return {...task , done: !task.done}
      }else{
        return task
      }
    })
    setTasks(editDone)
  }
  const filteredTasks = tasks.filter((el) => {
    if (filterTasks === 'all') {
      return true; // Mostra tutti i task
    } else if (filterTasks === 'done') {
      return el.done; // Mostra solo i task completati
    } else if (filterTasks === 'not-done') {
      return !el.done; // Mostra solo i task non completati
    }
    return true;
  });
  
  return (
    <Box mt={3} sx={{ width: "100%",overflowX:'auto',maxHeight:'500px' }}>
      {filteredTasks.map((el, i) => (
        <Paper
          sx={{
            p: "15px 10px",
            width: "100%",
            bgcolor: "#365486",
            color: "white",
            justifyContent: "space-between",
            mb: "20px",
            transition: "0.2s all",
          }}
          className="flex task-card"
          key={i}
        >
          <Box>
            <Typography variant="h6" component="h5" sx={{ fontWeight: "700" }}>
              {el.title}
            </Typography>
            <Typography>{el.content}</Typography>
          </Box>
          <Box sx={{ minWidth: "120px" }}>
            {/* Checked Btn */}
            <IconButton sx={{ p: "5px" }} onClick={()=>{
              handleDone(el.id)
            }}>
              <Done
                sx={{
                  ...IconStyle,
                  border: "3px solid #4F6F52",
                  color: el.done ? "white"  :"#4F6F52" ,
                  backgroundColor: el.done ? "#4F6F52" : "white",
                }}
              />
            </IconButton>
            {/* Edit Btn */}
            <IconButton
              sx={{ p: "5px" }}
              onClick={() => {
                setEditTask(true);
                setElId(el.id);
              }}
            >
              <Edit
                sx={{
                  ...IconStyle,
                  border: "3px solid #3887BE",
                  color: "#3887BE",
                }}
              />
            </IconButton>
            {/* Delete Btn */}
            <IconButton
              sx={{ p: "5px" }}
              onClick={() => {
                setDeleteTask(true);
                setElId(el.id);
              }}
            >
              <DeleteOutline
                sx={{
                  ...IconStyle,
                  border: "3px solid #BF3131",
                  color: "#BF3131",
                }}
              />
            </IconButton>
          </Box>
        </Paper>
      ))}
      {/* Edit Task */}
      {editTask && <EditTask {...{ setEditTask, elId,setPopUp }} />}
      {deleteTask && <DeleteTask {...{ setDeleteTask, elId }} />}
      {popUp && <PopUp />}
    </Box>
  );
}
