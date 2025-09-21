// services/time.js

/**
 * Formats a date string as DD.MM.YYYY
 * @param {string | Date} dateString
 * @returns {string} formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

/**
 * Formats a date string as HHhMM
 * @param {string | Date} dateString
 * @returns {string} formatted time
 */
export const formatTime = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}h${minutes}`
}
