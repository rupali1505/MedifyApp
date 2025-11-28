import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import { Box, Typography } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SpecialistCard from "./SpecialistCard";
import "../../main.css";



export default function Specialist() {
  const specialist_data = [
    { img: img2, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img4, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: img2, title: "Dr. Lesley Hulls", designation: "Medicine" },
    { img: img2, title: "Dr. Ahmad Khans", designation: "Neurologist" },
    { img: img3, title: "Dr. Heena Sachdevas", designation: "Orthopadics" },
    { img: img4, title: "Dr. Ankur Sharmas", designation: "Medicine" },
    { img: img4, title: "Dr. Ahmad Steven", designation: "Neurologist" },
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          600: { slidesPerView: 3 }, // tablet
          900: { slidesPerView: 4 }, // desktop
        }}
      >
        {specialist_data.map((doc) => (
          <SwiperSlide
            key={`${doc.title}-${doc.designation}`} // unique key
          >
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
