import { colors } from "../../constants";

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: 44,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.PROVINCIAL_PINK,
    borderRadius: 6,
    marginBottom: 24,
    color: colors.BLUE,
    boborderColor: state.isFocused
      ? colors.PROVINCIAL_PINK
      : colors.PROVINCIAL_PINK,
    "&:hover": {
      borderColor: colors.PROVINCIAL_PINK,
      outline: "none",
    },
    outline: state.isFocused ? "none" : "none",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.25,
    color: colors.BLUE,
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ display: "none" }),
  singleValue: (provided) => ({
    ...provided,
    color: colors.BLUE,
  }),
};
