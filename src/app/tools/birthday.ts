export const getDateDifference = () => {
  const birthday = new Date(1979, 11, 17);
  const today = new Date();
  const isToday =
    birthday.getDate() === today.getDate() &&
    birthday.getMonth() === today.getMonth();
  const yearsDifference = today.getFullYear() - birthday.getFullYear();
  return { isToday, yearsDifference };
};
