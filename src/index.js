import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import TasksProvider from "./context/TasksContext";
const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TasksProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </TasksProvider>
  </React.StrictMode>
);
