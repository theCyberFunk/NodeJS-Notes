const fs = require('fs')

let content = "\n // This is what will be written to the file"

fs.appendFileSync('events.js', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("File written!")
})

fs.readFile('events.js', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})