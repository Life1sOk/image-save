const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formateDate = (createdAt?: Date) => {
  // Определить дату картинки;
  const date = createdAt ? new Date(createdAt) : new Date();

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const monthYear = `${month}‘${year.toString().slice(2)}`;
  const dayMonth = `${day} ${month}`;

  return { dayMonth, monthYear };
};
