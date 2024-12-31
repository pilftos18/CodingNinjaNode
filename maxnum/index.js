// Import required module
const readline = require('readline');

const Solution = () => {
  // Write your code here
  const qInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  })


  qInterface.question("Enter first number", (num1)=>{
    qInterface.question("Enter second number", (num2)=>{
      // num1, num2
      const maximum = Math.max(Number(num1),Number(num2)) ;
      console.log('The Maximum of the two number:',maximum);
  })
});
};

Solution();
module.exports = Solution;
