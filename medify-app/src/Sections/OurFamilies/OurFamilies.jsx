import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "../../assets/OurFamilies.png";
  


export default function OurFamilies() {
  return (
    <Box pt={3} sx={{ background: "linear-gradient(#E7F0FF,#EBF1FF)" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box flex={1}>
            <Typography fontWeight={600} color="primary.main">
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY
            </Typography>
            <Typography variant="h2">Our Families</Typography>
            <Typography color="#77829D" lineHeight={1.8}>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner
              you require. We treat all enquiries sensitively and in the
              strictest confidence.
            </Typography>
          </Box>

          <Box flex={1}>
            <Box
              component="img"
              src={banner}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
