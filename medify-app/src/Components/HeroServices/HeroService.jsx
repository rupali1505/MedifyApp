import { Grid, Typography,Box } from "@mui/material";
import doctors from "../../assets/doctors.png";
import pharmacyIcon from "../../assets/pharmacyIcon.png";
import hospitals from "../../assets/hospitals.png";
import capsule from "../../assets/capsule.png";
import ambulance from "../../assets/ambulance.png";
import IconCard from "../Card/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const Services = useMemo(
    () => [
      { img: doctors, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitals, title: "Hospitals", active: true },
      { img: capsule, title: "Medical Store" },
      { img: ambulance, title: "Ambulance" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
