import { Divider, Stack, Typography } from "@mui/material";
import { format, add, isEqual, startOfDay } from "date-fns";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";
import style from "./DaySelector.module.css"
export default function DaySelector({ selectDate, setSelectDate, totalSlots }) {
  const date = startOfDay(new Date());
  const dateItems = [];

  for (let i = 0; i < 7; i++) {
    dateItems.push(add(date, { days: i }));
  }

  const customDateFormat = (day) => {
    if (isEqual(date, day)) {
      return "Today;";
    } else if (isEqual(date, add(day, { days: -1 }))) {
      return "Tomorrow";
    } else {
      return format(day, "E, d LLL");
    }
  };

  const handleClick = (day) => {
    setSelectDate(day);
  };

  return (
    <Stack pt={3} position="relative">
      <Divider sx={{ mb: 3 }} />
      <Swiper
        slidesPerView={4}
        loop={false}
        spaceBetween={11}
        className={style.SwiperStyle}
        breakpoints={{
          767: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {dateItems.map((day, index) => (
          <SwiperSlide key={index} className={style.swiperSlides}>
            <Stack
              textAlign="center"
              onClick={() => {
                handleClick(day);
              }}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontWeight={isEqual(day, selectDate) ? 700 : 400}
                fontSize={{ xs: 11, md: 16 }}
              >
                {customDateFormat(day)}
              </Typography>

              <Typography fontSize={{ xs: 8, md: 12 }} color="primary.green">
                {`${totalSlots} slots available`}
              </Typography>

              <Box
                height={{ xs: "4px", md: "5px" }}
                width={{ xs: 1, md: "calc(100%-50px)" }}
                position="relative"
                bottom="0"
                bgcolor={
                  isEqual(day, selectDate) ? "primary.main" :  "rgba(25, 5, 5, 1)"
                }
                left={0}
                zIndex={999}
                mt="5px"
                mx="auto"
              ></Box>
            </Stack>
          </SwiperSlide>
        ))}

        <span slot="container-start">
          <Box display={{ xs: "none", md: "block" }}>
            <SlideNextButton />
          </Box>
        </span>
      </Swiper>
      <Box
        height={{ xs: "4px", md: "5px" }}
        width={{ xs: 1, md: "calc(100%-50px)" }}
        position="absolute"
        bottom="0"
        bgcolor="#F0F0F5"
       sx={{translate:'-50% 0'}}
        left="50%"
        mt="5px"
        mx="auto"
      ></Box>
    </Stack>
  );
}
