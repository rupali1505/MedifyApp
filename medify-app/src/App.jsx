import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

 export default function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
    </div>
  );
}



