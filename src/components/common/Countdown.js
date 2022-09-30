import React, { useEffect, useState } from "react";

const Countdown = () => {
  const numberFormat = (num) => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const timediff = Math.floor(
    new Date("October 1,2022 00:00:00").getTime() - new Date().getTime()
  );
  const [deadline, setDeadline] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [duration, setDuration] = useState(timediff);
  useEffect(() => {
    if (timediff > 0) {
      const timer = setTimeout(() => {
        setDuration(duration - 1000);
        setDeadline({
          days: numberFormat(Math.floor(duration / (1000 * 60 * 60 * 24))),
          hours: numberFormat(
            Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: numberFormat(
            Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: numberFormat(Math.floor((duration % (1000 * 60)) / 1000)),
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [duration]);
  return (
    <div className="justify-center md:justify-start md:w-[407px] md:h-[95px] h-[70px] flex items-center gap-x-2 mx-auto">
      <Box>{deadline.days}</Box>
      <Dots></Dots>
      <Box type="giờ">{deadline.hours}</Box>
      <Dots></Dots>
      <Box type="phút ">{deadline.minutes}</Box>
      <Dots></Dots>
      <Box type="giây">{deadline.seconds}</Box>
    </div>
  );
};

const Box = ({ children, type = "ngày" }) => {
  return (
    <div className="md:w-[95px] md:h-[95px] w-[55px] h-[55px] rounded-[10px] bg-transparent flex items-center flex-col justify-between p-[10px]">
      <h4 className="text-red font-semibold md:text-[52px] text-[32px] flex-1 leading-[1]">
        {children}
      </h4>
      <span className="text-blue2 text-[14px] font-bold">{type}</span>
    </div>
  );
};

const Dot = () => {
  return (
    <div className="md:w-[9px] md:h-[9px] w-[5px] h-[5px] bg-red rounded-full"></div>
  );
};

const Dots = () => {
  return (
    <div className="flex flex-col gap-y-[7px] md:mb-[8px]">
      <Dot></Dot>
      <Dot></Dot>
    </div>
  );
};

export default Countdown;
