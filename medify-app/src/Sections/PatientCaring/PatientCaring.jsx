import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import patientImg from "../../assets/patientCaring.png"
import checkMark from "../../assets/checkMark.png"

export default function PatientCaring() {
  return (
    <Box  py={8} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={patientImg}
              width="100%"
              height="auto"
              sx={{ maxWidth: 400 }} 
            />
          </Grid>

          
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 500}}>
              {" "}
             
              <Typography fontWeight={600} color="primary.main" gutterBottom>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
              </Typography>
              <Typography variant="h2" mb={1}>
                Patient{" "}
                <Box component="span" color="primary.main">
                  Caring
                </Box>
              </Typography>
              <Typography color="#77829D" lineHeight={1.8} mb={2}>
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                healthcare.
              </Typography>
              <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                {[
                  "Stay Updated About Your Health",
                  "Check Your Results Online",
                  "Manage Your Appointments",
                ].map((item, index) => (
                  <ListItem disableGutters key={index}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box
                        component="img"
                        src={checkMark}
                        height={22}
                        width={22}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 500,
                        color: "#1B3C74",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
