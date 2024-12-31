const fs = require('fs')

// To read file content using blocking code.

// console.log('Starting to read')

// const buffer = fs.readFileSync('data.txt', { encoding: 'utf8' })
// console.log(buffer)

// Creating and Writing a file.
try {
  fs.writeFileSync('employee.txt', 'Name: John Doe, Age: 40, Position: Manager')
} catch (err) {
  console.log(err)
}

// Append another employee data
fs.appendFileSync('employee.txt', 'Name: David Doe, Age: 55, Position: COO')

// Deleting a file
try {
  fs.unlinkSync('employee.txt')
} catch (err) {
  console.log("File doesn't exist")
}

console.log('This is another operation being performed')