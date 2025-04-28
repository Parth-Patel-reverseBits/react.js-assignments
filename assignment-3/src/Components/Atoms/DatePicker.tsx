import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// const today = dayjs();
const yesterday = dayjs().subtract(1, "day");
// const todayStartOfTheDay = today.startOf("day");

export default function DateValidationDisablePast() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "DatePicker",
          "TimePicker",
          "DateTimePicker",
          "DateRangePicker",
          "TimeRangePicker",
          "DateTimeRangePicker",
        ]}
      >
        <DemoItem>
          <DatePicker
            defaultValue={yesterday}
            views={["year", "month", "day"]}
            slotProps={{
              openPickerButton: {
                sx: {
                  backgroundColor: "white",
                  borderRadius: "3px",
                  right: "5px",
                  ":hover": {
                    backgroundColor: "white",
                  },
                },
              },
              textField: {
                sx: {
                  backgroundColor: "black", // Light gray background
                  borderRadius: "4px",
                },
              },
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
