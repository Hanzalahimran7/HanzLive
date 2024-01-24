import { Box, useTheme } from '@mui/material';
import InnerCircle from '../Assets/InnerCircle';
import OuterCircle from '../Assets/OuterCircle';
import minuteHand from '../Assets/MinuteHand.svg';
import hourHand from '../Assets/HourHand.svg';
import secondHand from '../Assets/SecondHand.svg';
import clockCenter from '../Assets/ClockCenter.svg';
import { useEffect, useState } from 'react';

const Clock = () => {
  const date = new Date();
  const [hour, setHour] = useState<number>(
    date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
  );
  const [min, setMinutes] = useState<number>(date.getMinutes());
  const [sec, setSeconds] = useState<number>(date.getSeconds());

  const [clockWidth, setClockWidth] = useState(() => calculateClockWidth());

  function calculateClockWidth() {
    const screenWidth = window.innerWidth;
    return (screenWidth * 50) / 100;
  }

  useEffect(() => {
    const handleResize = () => {
      setClockWidth(calculateClockWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = useTheme();
  const bgColor =
    theme.palette.mode === 'dark'
      ? theme.palette.grey[900]
      : theme.palette.grey[200];

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((sec) => (sec + 1 === 60 ? 0 : sec + 1));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (sec === 0) {
      setMinutes(min + 1 === 60 ? 0 : min + 1);
    }
  }, [sec]);

  useEffect(() => {
    if (min === 0) {
      setHour(hour + 1 === 12 ? 0 : hour + 1);
    }
  }, [min]);

  return (
    <>
      <Box
        sx={{
          background: '#f3f3f3',
          width: `${clockWidth}px`,
          height: `${clockWidth}px`,
          backgroundColor: bgColor,
        }}
        className="relative shrink-0 rounded-full"
      >
        <Box className="absolute w-full">
          <OuterCircle width={clockWidth} />
        </Box>
        <Box className="absolute w-[80%] m-[10%]">
          <InnerCircle width={0.8 * clockWidth} />
        </Box>
        <img
          className="absolute w-[35%] left-[47%] top-[48%]"
          style={{
            transform: `rotate(${(sec * 6 + 240) % 360}deg)`,
            transformOrigin: '9.66% 11.32%',
          }}
          src={secondHand}
          alt="Second-hand"
        />
        <img
          className="absolute w-[35%] left-[46%] top-1/4"
          src={minuteHand}
          style={{
            transform: `rotate(${(min * 6 + 309) % 360}deg)`,
            transformOrigin: '12.7% 86.3%',
          }}
          alt="Minute-hand"
        />
        <img
          className="absolute w-[25%] left-[30%] top-[31.8%]"
          src={hourHand}
          style={{
            transform: `rotate(${(hour * 30 + 48) % 360}deg)`,
            transformOrigin: '82.46% 80.19%',
          }}
          alt="Hour-hand"
        />
        <img
          className="absolute w-[1%] left-2/4 top-2/4"
          src={clockCenter}
          alt="Clock-Center"
        />
      </Box>
    </>
  );
};

export default Clock;
