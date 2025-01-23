import moment from 'moment-timezone'

export function getDayName(dateString) {
  // Create a Date object from the string
  const date = new Date(dateString)

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string')
  }

  // Use Intl.DateTimeFormat to get the day name
  const dayName = new moment.utc(dateString).tz('Asia/Manila', true).format('dddd')

  return dayName
}

export function formatDate(dateString) {
  // Parse the date string and format it
  const localDate = moment.utc(dateString).tz('Asia/Manila', true).format('MMMM D, YYYY')
  const formattedDate = moment(dateString).local().format('MMMM D, YYYY')
  return localDate
}

// export default { getDayName, formatDate }
