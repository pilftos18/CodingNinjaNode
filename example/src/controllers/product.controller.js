// Please don't change the pre-written code
// Import the necessary modules here
import path from 'path';

export const getProducts = (req, res) => {
  // Wite your code here
  // console.log(path.resolve());
  return res.sendFile(path.join(path.resolve(),'src','views','index.html'));

};
