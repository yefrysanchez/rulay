const stampTime = (dateTimeString) => {
  // Create a Date object from the date-time string
  const date = new Date(dateTimeString);

  // Define an array of month names
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  // Extract the day, month, and year from the Date object
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Format the date as "Aug. 30, 2024"
  return `${month} ${day}, ${year}`;
};

export default stampTime;
