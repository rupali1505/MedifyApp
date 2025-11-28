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
        selectedDate={selectedDate} // fixed prop name
        setSelectedDate={setSelectedDate} // fixed prop name
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectDate={selectedDate} // this is fine for TimeSlotPicker
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
