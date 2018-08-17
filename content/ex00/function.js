module.exports = (context) => {
  const result = parseInt(context.body, 10)

  return result === 4
}
