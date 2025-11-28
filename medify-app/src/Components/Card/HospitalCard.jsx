import { useState } from "react";
import hospitalIcon from "../../assets/hospitalIcon.png";
import icon from "../../assets/icon.png";
import Calendar from "../Calendar/Calendar";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { format, parseISO, isValid } from "date-fns";

export default function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  // Safely parse booking date
  let bookingDateLabel = "N/A";
  if (details.bookingDate) {
    const dateObj =
      typeof details.bookingDate === "string"
        ? parseISO(details.bookingDate)
        : new Date(details.bookingDate);
    if (isValid(dateObj)) {
      bookingDateLabel = format(dateObj, "dd MMMM yyyy");
    }
  }

  // Safely handle booking time
  const bookingTimeLabel = details.bookingTime || "N/A";

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        flexWrap="wrap"
      >
        {/* Hospital Icon */}
        <Box
          component="img"
          src={hospitalIcon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />

        {/* Hospital Details */}
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
          >
            {details["Hospital Name"]?.toLowerCase() || "Unknown Hospital"}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            mb={1}
          >
            {`${details["City"]?.toLowerCase() || "City"}, ${
              details["State"] || "State"
            }`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"] || "Type not available"}
          </Typography>

          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="primary.green"
            >
              Free
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>

          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={icon}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {details["Hospital overall rating"] === "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        {/* Booking / Chips */}
        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking && (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
            </>
          )}

          {booking && (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={bookingTimeLabel}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
              <Chip
                label={bookingDateLabel}
                variant="outlined"
                color="success"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Calendar */}
      {showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}
