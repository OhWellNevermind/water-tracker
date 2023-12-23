import { Select } from "./TimeSelector.styled";

export const TimeSelector = () => {
  // Створення списку часу з кроком 5хв
  const generateTimeOptions = () => {
    const options = [];

    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 5) {
        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const timeString = `${formattedHours}:${formattedMinutes}`;

        options.push(
          <option key={timeString} value={timeString}>
            {timeString}
          </option>
        );
      }
    }

    return options;
  };

  return <Select>{generateTimeOptions()}</Select>;
};
