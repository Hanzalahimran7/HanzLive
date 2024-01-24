import { useTheme } from '@mui/material';

type innerCircleProps = {
  width: number;
};

const InnerCircle: React.FC<innerCircleProps> = ({ width }) => {
  const theme = useTheme();
  const ringColor = theme.palette.mode === 'dark' ? '#828282' : '#3A3A3A';
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="47.5"
        stroke={ringColor}
        stroke-width="5"
        stroke-dasharray="0.5 4.7"
      />
    </svg>
  );
};

export default InnerCircle;
