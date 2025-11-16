import { Container, Stack, Box } from "@mui/material";
import Navbar from "../Components/Navbar";
// import styles from "./Home.module.css";

export default function Home() {
  return (
    <Box sx={{ width: "100%", padding: 0, margin: 0 }}>
      <Box
        sx={{
          width: "100vw",
          background:
            "linear-gradient(#E7F0FF, rgba(232,241,255,0.47) 90%, #fff 10%)",
            
        }}
      >
        <Navbar />
      </Box>
    </Box>
  );
}
