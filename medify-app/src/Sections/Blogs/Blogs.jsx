import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard"

export default function Blogs() {
  return (
    <Box py={6}>
      <Container>
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Blog & News
        </Typography>
        <Typography variant="h2" mb={2} textAlign="center">
          Read our latest news
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
