import { useState } from "react";
import DaySelector from "../DaySelector/DaySelector.jsx";
import { Box } from "@mui/material";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "../TimeSlotPicker/TimeslotPicker.jsx";

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate} 
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
