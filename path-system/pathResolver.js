// Import the necessary modules here.
const path =  require("path");



exports.getAbsolutePath = (filePath) => {
    const ab = path.resolve(filePath);
return ab
};
