/**
 * Get today's date in YYYY-MM-DD format
 * Useful for setting min attribute on date inputs
 */
export function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Calculate difference in days between two dates
 * @param {string | Date} checkIn - check-in date
 * @param {string | Date} checkOut - check-out date
 * @returns {number} Number of nights
 */
export function calculateNights(checkIn, checkOut) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end - start;
  if (diffTime <= 0) return 0; // check-out must be after check-in
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Format Date object to readable string (e.g., "Jan 10, 2026")
 * @param {string | Date} date
 * @returns {string}
 */
export function formatDateReadable(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
