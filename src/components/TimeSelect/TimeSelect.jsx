import { StyledSelect } from "./TimeSelector.styled";
import { customStyles } from "./СustomSelect.styled";

export const TimeSelector = ({ valueTime = "7:00" }) => {
  const generateTimeOptions = () => {
    const options = [];

    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 5) {
        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const timeString = `${formattedHours}:${formattedMinutes}`;

        options.push({ value: timeString, label: timeString });
      }
    }

    return options;
  };
  const defaultValue = { value: valueTime, label: valueTime };
  return (
    <StyledSelect
      styles={customStyles}
      options={generateTimeOptions()}
      defaultValue={defaultValue}
    />
  );
};
