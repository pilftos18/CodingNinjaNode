// Please do not change the prewritten code
import axios from "axios";

const Solution = async () => {
  // Write your code here
  try {
    const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
Solution();
module.exports = Solution;
