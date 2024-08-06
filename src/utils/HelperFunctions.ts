export const formatDate = (dateString: string | number) => {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date =>
    new Date(date).toLocaleString('default', { month: 'short' });

  const formattedDate = `${day} ${month(date)}`;

  return formattedDate;
};

export const formatDateWithTime = (dateString: string | number) => {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${formatDate(dateString)}, ${hours}:${minutes}`;

  return formattedDate;
};
