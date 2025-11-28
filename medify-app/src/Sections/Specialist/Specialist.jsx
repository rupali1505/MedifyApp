import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import { Box, Typography } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SpecialistCard from "./SpecialistCard";
import "swiper/css";

export default function Specialist() {
  const specialist_data = [
    { img: img2, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img4, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: img2, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img4, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];

  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" textAlign="center" mb={3} px={2}>
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {specialist_data.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
