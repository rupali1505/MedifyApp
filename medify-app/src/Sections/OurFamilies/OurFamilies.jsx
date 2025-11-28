import { Box, Container, Grid, Typography} from "@mui/material";
import banner from "../../assets/ourFamilies.png";

export default function OurFamilies() {
  return (
    <Box pt={3} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
       
          <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 60%" } }}>
            <Typography fontWeight={600} color="primary.main" gutterBottom>
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography variant="h2" gutterBottom>
              Our Families
            </Typography>
            <Typography color="#77829D" lineHeight={1.8}>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Box>

        
          <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 35%" } }}>
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

