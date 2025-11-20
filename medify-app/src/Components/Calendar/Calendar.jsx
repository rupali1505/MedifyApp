import { useState } from "react";
import DaySelector from "./DaySelector";
import { Box, Typography } from "@mui/material";
import { startOfDay } from "date-fns";

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectDate, setSelectDate] = useState(startOfDay(new Date()));
  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelector
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectDate={selectDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
