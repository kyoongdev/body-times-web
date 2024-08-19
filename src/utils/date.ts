import dayjs from "dayjs";

export const getToday = () => {
  const year = dayjs().year();
  const month = dayjs().month();
  const date = dayjs().date();

  return {
    year,
    month,
    date,
  };
};
