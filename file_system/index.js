// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
  // Write your code here
  try {
    fs.writeFileSync('notes.txt', 'The world has enough coders');
    const buffer =fs.readFileSync('notes.txt',{encoding: 'utf8'});
    console.log(buffer)
  } catch (err) {
    console.log(err)
  }


fs.appendFileSync('notes.txt', ' BE A CODING NINJA!')
console.log(fs.readFileSync('notes.txt', { encoding: 'utf8'}));

};
Solution();
module.exports = Solution;
