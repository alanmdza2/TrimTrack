import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar({ onDateSelect }) {
  const handleDateChange = (date) => {
    onDateSelect(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar onChange={handleDateChange} />
    </LocalizationProvider>
  );
}