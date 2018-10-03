module.exports = {
  date: (dateStr) => new Date(
    parseInt(dateStr.slice(0, 4), 10),
    parseInt(dateStr.slice(4, 6), 10) - 1,
    parseInt(dateStr.slice(6, 8), 10),
    12
  ).toDateString(),
  yearRange: (first, last) => {
    const firstYear = parseInt(first.slice(0, 4), 10)
    return Array(parseInt(last.slice(0, 4), 10) - firstYear + 1)
      .fill()
      .map((a, i) => i + firstYear)
      .reverse()
  }
}
