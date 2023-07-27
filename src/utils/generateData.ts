export const generateSalesDataForYearAndHalf = () => {
  const startDate = new Date('2022-01-01').getTime()
  const endDate = new Date().getTime()
  const dayMilliseconds = 24 * 60 * 60 * 1000
  const data = []

  for (let date = startDate; date <= endDate; date += dayMilliseconds) {
    const value = Math.floor(Math.random() * 11) + 0

    data.push([date, value])
  }

  return data
}
