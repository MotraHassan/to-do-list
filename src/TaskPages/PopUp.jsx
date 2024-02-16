import { TaskAlt } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import React from "react";

export default function PopUp() {
  return (
    <Card
      sx={{
        p: "10px",
        width: "fit-content",
        position: "fixed",
        left: "20px",
        bottom: "20px",
        zIndex: "999",
        backgroundColor: "#4F6F52",
        color:'white'
      }}
      className="flex"
    >
      <Typography  sx={{fontSize: "14px"}}>
        Modification completed successfully {" "}
      </Typography>
      <TaskAlt fontSize="small" sx={{ ml:'3px'}} />
    </Card>
  );
}
