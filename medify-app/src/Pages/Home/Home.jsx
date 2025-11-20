import { Container, Stack, Box } from "@mui/material";
import Navbar from "../../Components/NavBar/Navbar";
import HeroSlider from "../../Components/Hero/HeroSlider";
import SearchHospitals from "../../Components/SearchHospital/SearchHospital";
import HeroServices from "../../Components/HeroServices/HeroService";
import FAQs from "../../Sections/FAQs/FAQs";
import OurFamilies from "../../Sections/OurFamilies/OurFamilies.jsx";
import Blogs from "../../Sections/Blogs/Blogs.jsx";
// import styles from "./Home.module.css";

export default function Home() {
  return (
    <Box sx={{ width: "100%", padding: 0, margin: 0 }}>
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(#E7F0FF, rgba(232,241,255,0.47) 90%, #fff 10%)",
            
        }}
      >
        <Navbar />
        <Container>
          <HeroSlider/>
          <Stack
          p={{xs:2.5, md:8}}
          mt={{xs:-2, md:0, lg:-6, xl:-10}}
          position="relative"
          zIndex={99}
          bgcolor="#fff"
          borderRadius="15px"
          spacing={8}
          boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospitals/>
            <HeroServices/>
          </Stack>
        </Container>
      </Box>
      <Blogs/>
      <OurFamilies/>
      <FAQs/>
    </Box>
  );
}
