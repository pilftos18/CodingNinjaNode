// Do not change the pre-written code.
// Make the necessary imports here.
// const path =  require("path");
import fs from 'fs';


export const writeBlog = (filePath, name) => {
// Write your code here.
// console.log(filePath);
// console.log(name);
try {
     fs.writeFileSync(filePath,name);
} catch (err) {
    console.log(err)
  }
}

export const publishBlog = (filePath) => {
// Write your code here.
  return fs.readFileSync (filePath,{ encoding: 'utf8'})
//    return "Blog published!";
}