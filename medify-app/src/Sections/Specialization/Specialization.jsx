import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from "../../Components/Card/IconCard";
import icon1 from "../../assets/Drugstore.png";
import icon2 from "../../assets/Stethoscope.png";
import icon3 from "../../assets/Heart Rate.png";
import icon4 from "../../assets/Heart Rate Monitor.png";
import icon5 from "../../assets/Blood Sample.png";
import icon6 from "../../assets/Immune.png";
import icon7 from "../../assets/X-Ray.png";
export default function Specialization() {
  const data = [
    { icon: icon1, title: "Dentistry" },
    { icon: icon2, title: "Primary Care" },
    { icon: icon3, title: "Cardiology" },
    { icon: icon4, title: "MRI Resonance" },
    { icon: icon5, title: "Blood Test" },
    { icon: icon6, title: "Piscologist" },
    { icon: icon1, title: "Laboratory" },
    { icon: icon7, title: "X-Ray" },
  ];

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by specialisation
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          {data.map((item) => (
            <Grid item xs={4} md={3} key={item.title}>
              <IconCard
                img={item.icon}
                title={item.title}
                bgColor={"#FFFFFF"}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
}
