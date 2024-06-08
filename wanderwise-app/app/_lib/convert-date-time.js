//CONVERTS ISODATE to year-month-day @ hrs-min format.
export default function convertDateTime(isoDateTime) {
  const date = new Date(isoDateTime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-11
  const day = String(date.getDate()).padStart(2, "0");

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

  return `${year}-${month}-${day} @ ${hours}:${minutes} ${period}`;
}
