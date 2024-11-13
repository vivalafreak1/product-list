export function formatDate(date) {
  const formattedDate = new Date(date).toLocaleString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return formattedDate.replace(/\./g, ":");
}
