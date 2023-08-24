export const convertHoursToDate = (time: string) => {
  const [hours, minutes] = time.split(":");
  const currentDate = new Date();
  currentDate.setHours(parseInt(hours, 10));
  currentDate.setMinutes(parseInt(minutes, 10));

  return currentDate.valueOf();
};
