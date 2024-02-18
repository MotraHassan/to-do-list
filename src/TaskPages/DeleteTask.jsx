import { Box, Button, Card, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext';

export default function DeleteTask({setDeleteTask,elId}) {
  const { tasks, setTasks } = useContext(TasksContext);
  const handleDelete = ()=>{
    const deleteTask = tasks.filter((task)=>
    task.id !== elId
    ) 
    setTasks(deleteTask)
    localStorage.setItem("tasks", JSON.stringify(deleteTask));
    setDeleteTask(false)
  }
  return (
    <Box
    sx={{
      position: "fixed",
      left: '0',
      top: '0',
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      zIndex: "999",
    }}
    className="flex"
  >

    <Card sx={{p:'20px',width:'400px'}}>
    <Typography variant="h6">Are you sure you want to delete this task ?</Typography>
  
      <Box sx={{ display: "flex", justifyContent: "flex-end",mt:3 }}>
        <Button color="primary" variant="text"  onClick={handleDelete}>
          Delete
        </Button>
        <Button color="primary" variant="text" onClick={()=> setDeleteTask(false)}>
          Cancel
        </Button>
      </Box>
    </Card>

  </Box>
  )
}
