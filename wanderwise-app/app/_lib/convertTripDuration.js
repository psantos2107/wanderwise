export default function convertDuration(isoDuration) {
  const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?/;
  const matches = isoDuration.match(regex);

  if (!matches) {
    throw new Error("Invalid ISO duration format");
  }

  const hours = matches[1] ? parseInt(matches[1], 10) : 0;
  const minutes = matches[2] ? parseInt(matches[2], 10) : 0;

  return `${hours} hours ${minutes} min`;
}
