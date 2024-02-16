import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

export default function EditTask({ setEditTask, elId,setPopUp }) {
  const { tasks, setTasks } = useContext(TasksContext);
  const { title, content } = tasks.find((el) => {
    return el.id === elId;
  });
  const [newTitle, setnewTitle] = useState(title);
  const [newContent, setnewContent] = useState(content);

  const handleEdit =()=>{
    const editTask = tasks.map((task)=>{
      if (task.id === elId){
        return {...task , title: newTitle, content : newContent}
      }else{
        return task
      }
    })
    setTasks(editTask);
    setEditTask(false);
    setPopUp(true)
    setTimeout(()=>{
      setPopUp(false)
    },3000)
    
  }
  return (
    <Box
      sx={{
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        zIndex: "999",
      }}
      className="flex"
    >
      <Card sx={{ p: "20px", width: "400px" }}>
        <Typography variant="h6">Edit Task</Typography>
        <Box sx={{ flexDirection: "column", gap: 3, mt: 2 }} className="flex">
          <TextField
            label="Title"
            variant="standard"
            fullWidth
            value={newTitle}
            onChange={(e) => setnewTitle(e.target.value)}
          />
          <TextField
            label="Detailes"
            variant="standard"
            multiline
            fullWidth
            value={newContent}
            onChange={(e) => setnewContent(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
          <Button color="primary" variant="text"
          onClick={handleEdit}
          
          >
            Edit
          </Button>
          <Button
            color="primary"
            variant="text"
            onClick={() => {
              setEditTask(false);
            }}
          >
            Cancel
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
