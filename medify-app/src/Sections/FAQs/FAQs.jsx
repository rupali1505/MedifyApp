import {Box, Grid, Typography, Container} from "@mui/material";
import faqImg from "../../assets/faqImg.png"
export default function FAQs(){
    const faqs = [
      {
        question: "Why choose our medical for your family?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit quasi sit aliquid quas voluptas iure fuga, inventore autem doloremque saepe ipsa, laboriosam obcaecati, tempore nemo. Repellendus nemo iste dolor?",
      },
      {
        question: "Why we are different from others?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit quasi sit aliquid quas voluptas iure fuga, inventore autem doloremque saepe ipsa, laboriosam obcaecati, tempore nemo. Repellendus nemo iste dolor?",
      },
      {
        question: "Trusted and experience senior care & love",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit quasi sit aliquid quas voluptas iure fuga, inventore autem doloremque saepe ipsa, laboriosam obcaecati, tempore nemo. Repellendus nemo iste dolor?",
      },
      {
        question: "How to get appointment for emergency cases?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit quasi sit aliquid quas voluptas iure fuga, inventore autem doloremque saepe ipsa, laboriosam obcaecati, tempore nemo. Repellendus nemo iste dolor?",
      }
    ];

    return (
      <Box py={4}>
        <Container maxWidth="xl">
          <Typography color="primary.main" fontWeight={600} textAlign="center">
            Get Your Answer
          </Typography>
          <Typography variant="h2" mb={2} textAlign="center">
           Frequently Asked Question
          </Typography>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} mb={6}>
                <Box
                src={faqImg}
                component="img"
                width={1}
                height='auto'
                />
                </Grid>
                <Grid item xs={12} mb={6}>
                    <Box maxWidth={450}>
                        {/* <CustomizedAccordions data = {faqs}/> */}

                    </Box>

                </Grid>

          </Grid>
        </Container>
      </Box>
    );
}
