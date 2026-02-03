/**
 * Format a number as Indian Rupees currency
 * @param {number} amount - amount in rupees
 * @param {boolean} includeSymbol - whether to include ₹ symbol (default: true)
 * @returns {string} formatted price
 */
export function formatPrice(amount, includeSymbol = true) {
  if (isNaN(amount)) return includeSymbol ? "₹0" : "0";
  const formatted = amount.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return includeSymbol ? `₹${formatted}` : formatted;
}

/**
 * Shorten long text with ellipsis
 * @param {string} text - input text
 * @param {number} maxLength - maximum length allowed
 * @returns {string} shortened text
 */
export function truncateText(text, maxLength = 100) {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

/**
 * Capitalize first letter of a string
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
