export const customStyles = {
  control: (provided) => ({
    ...provided,
    height: 44,
    border: "1px solid #d7e3ff",
    borderRadius: 6,
    marginBottom: 24,
    color: "#407bff",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.25,
    color: "#407bff",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: () => ({ display: "none" }),
  singleValue: (provided) => ({
    ...provided,
    color: "#407bff",
  }),
};
