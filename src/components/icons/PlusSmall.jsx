export const PlusSmall = ({ width, height, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M8 4V12M12 8H4" stroke={stroke} strokeLinecap="round" />
    </svg>
  );
};
