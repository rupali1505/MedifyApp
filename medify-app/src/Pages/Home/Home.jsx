import { Container, Stack, Box } from "@mui/material";
import Navbar from "../../Components/NavBar/Navbar";
import HeroSlider from "../../Components/Hero/HeroSlider";
import SearchHospitals from "../../Components/SearchHospital/SearchHospital";
import HeroServices from "../../Components/HeroServices/HeroService";
import FAQs from "../../Sections/FAQs/FAQs";
import OurFamilies from "../../Sections/OurFamilies/OurFamilies.jsx";
import Blogs from "../../Sections/Blogs/Blogs.jsx";
import PatientCaring from "../../Sections/PatientCaring/PatientCaring.jsx";
import Specialist from "../../Sections/Specialist/Specialist.jsx";
import Specialization from "../../Sections/Specialization/Specialization.jsx";
import Offers from "../../Sections/Offers/Offers.jsx";


export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <Navbar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            // mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            mt={0}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospitals />
            <HeroServices />
          </Stack>
        </Container>
      </Box>
      <Offers />
      <Specialization />
      <Specialist />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
    </Box>
  );
}
