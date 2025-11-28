import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Sections/Footer/Footer";
import DownloadApp from "./Sections/DownloadApp/DownloadApp";

 export default function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp/>
      <Footer/>
    </div>
  );
}



