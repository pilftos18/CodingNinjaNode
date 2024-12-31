const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", "new data", (data, err) => {
    if (err) {
      console.log(err);
    }else{
      console.log("Data successfully updated");
        // Read and display the data after the append operation
        fs.readFile("note.txt", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File update Successfully");
            console.log(data);
          }
        });

    } 
  });
}
Solution();
module.exports = Solution;