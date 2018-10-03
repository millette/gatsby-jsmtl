const date = (dateStr) => {
  const year = parseInt(dateStr.slice(0, 4), 10)
  const month = parseInt(dateStr.slice(4, 6), 10) - 1
  const day = parseInt(dateStr.slice(6, 8), 10)
  return new Date(year, month, day, 12).toDateString()
}

export {
  date
}
