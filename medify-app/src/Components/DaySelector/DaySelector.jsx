import { useRef, useEffect } from "react";
import { SlideNextButton, SlidePrevButton } from "./SliderButton.jsx";
import { format, add, isEqual, startOfDay } from "date-fns";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../main.css";
import { Box, Divider, Typography } from "@mui/material";
import "swiper/css";

export default function DaySelector({
  selectedDate,
  setSelectedDate,
  totalSlots,
}) {
  const date = startOfDay(new Date());
  const dateItems = Array.from({ length: 7 }, (_, i) => add(date, { days: i }));

  const swiperRef = useRef(null);

  const selectedIndex = dateItems.findIndex((day) =>
    isEqual(day, selectedDate)
  );

  // Scroll to selected day when component mounts or selectedDate changes
  useEffect(() => {
    if (swiperRef.current && selectedIndex >= 0) {
      swiperRef.current.slideTo(selectedIndex);
    }
  }, [selectedDate, selectedIndex]);

  const customDateFormat = (day) => {
    if (isEqual(date, day)) return "Today";
    if (isEqual(add(date, { days: 1 }), day)) return "Tomorrow";
    return format(day, "E, d LLL");
  };

  return (
    <Box pt={3} position="relative">
      <Divider sx={{ mb: 3 }} />

      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={12}
        loop={false}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{ width: "100%", padding: "0 40px" }}
      >
        {dateItems.map((day, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              onClick={() => setSelectedDate(day)}
              sx={{
                cursor: "pointer",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                fontSize={{ xs: 11, md: 16 }}
              >
                {customDateFormat(day)}
              </Typography>

              <Typography fontSize={{ xs: 8, md: 12 }} color="inherit">
                {`${totalSlots} Slots Available`}
              </Typography>

              {/* Pointer / underline */}
              <Box
                height={{ xs: "4px", md: "5px" }}
                width="60%"
                bgcolor={
                  isEqual(day, selectedDate) ? "primary.main" : "transparent"
                } // Blue underline
                mt="5px"
                borderRadius="2px"
              />
            </Box>
          </SwiperSlide>
        ))}

        {/* Navigation arrows */}
        <span slot="container-start">
          <Box display={{ xs: "none", md: "block" }}>
            <SlidePrevButton />
          </Box>
        </span>

        <span slot="container-end">
          <Box display={{ xs: "none", md: "block" }}>
            <SlideNextButton />
          </Box>
        </span>
      </Swiper>

      {/* Background bar */}
      <Box
        height={{ xs: "4px", md: "5px" }}
        width="100%"
        bgcolor="#F0F0F5"
        mt="5px"
        position="absolute"
        bottom={0}
        left={0}
      />
    </Box>
  );
}
