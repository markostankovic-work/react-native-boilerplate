
const people = {
  results: [
    { name: 'Nader', height: 36 },
    { name: 'Amanda', height: 24 },
    { name: 'Jason', height: 44 }
  ]
}

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}