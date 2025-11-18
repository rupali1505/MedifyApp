import { Container, Stack, Box } from "@mui/material";
import Navbar from "../Components/NavBar/Navbar";
import HeroSlider from "../Components/Hero/HeroSlider";
import SearchHospitals from "../Components/SearchHospital/SearchHospital";
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
        <Container>
          <HeroSlider/>
          <Stack>
            <SearchHospitals/>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
