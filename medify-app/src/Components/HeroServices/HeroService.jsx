import { Grid, Typography,Box } from "@mui/material";
import doctors from "../../assets/doctors.png";
import pharmacyIcon from "../../assets/pharmacyIcon.png";
import hospitals from "../../assets/hospitals.png";
import capsule from "../../assets/capsule.png";
import ambulance from "../../assets/ambulance.png";
import IconCard from "../Card/IconCard";
import { useMemo } from "react";

export default function HeroServices(){
    const Services = useMemo(() => [
      { img: doctors, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitals, title: "Hospitals" },
      { img: capsule, title: "Capsule" },
      { img: ambulance, title: "Ambulance" },
    ],[]);

    return (
      <Box >
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
          {Services.map((Service) => (
            <Grid item key={Service.title} xs={4} md={2}>
              <Box >
                <IconCard
                  img={Service.img}
                  tittle={Service.title}
                  active={Service.active || false}
                  bgColor="#FAFBFE"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );

}