import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      // TODO: Append user query in "queries.txt"
      fs.appendFileSync('queries.txt', queryString);
      console.log(fs.readFileSync('queries.txt',{encoding: 'utf8'}));

      // Nodemailer mailOptions
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query received",
        text: "We have received your query and will get back to you soon.",
      };

      // TODO: Use Nodemailer to send confirmation email
      // TODO: Emit "mailSent" event

       // Send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Success: Email sent to ${email}`);
        customEvent.mailSent(email);
      }
    });
      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});


// const server = http.createServer((req, res) => {
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "codingninjas2k16@gmail.com",
//       pass: "slwvvlczduktvhdj",
//     },
//   });

//   if (req.method === "POST") {
//     let data = "";

//     req.on("data", (chunk) => {
//       data += chunk;
//     });


// req.on("end", () => {
//       const { name, email, message } = JSON.parse(data);

//       // Write user query to "query.txt"
//       const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

//       // Append user query in "queries.txt"
//       fs.appendFile("queries.txt", queryString, (err) => {
//         if (err) throw err;
//         console.log(
//           `\nQuery saved!\n\nUser name: ${name}\nQuery: ${message}\n`
//         );
//       });

// const mailOptions = {
//         from: "codingninjas2k16@gmail.com",
//         to: email,
//         subject: "Query received",
//         text: "We have received your query and will get back to you soon.",
//       };

//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           // Emit "mailSent" event
//           customEvent.mailSent(email);
//         }
//       });

//       res.end("Query received");
//     });

// } else {
//     res.end("Welcome to Coding Ninjas!");
//   }
// });




const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log("custom event 'mailSent' emitted");
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

server.listen(5000);
console.log('Server is listening on 5000')
export default server;
export { server, CustomEvent, Solution };
===============================================

import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);

      // Write user query to "query.txt"
      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      // Append user query in "queries.txt"
      fs.appendFile("queries.txt", queryString, (err) => {
        if (err) throw err;
        console.log(
          `\nQuery saved!\n\nUser name: ${name}\nQuery: ${message}\n`
        );
      });

      //  Using Nodemailer to send confirmation email
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query received",
        text: "We have received your query and will get back to you soon.",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          // Emit "mailSent" event
          customEvent.mailSent(email);
        }
      });

      res.end("Query received");
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  customEvent.addListener("mailSent", (email) => {
    console.log("custom event 'mailSent' emitted");
    console.log(
      `confirming that the email has been sent successfully to ${email}`
    );
  });
};

export default server;
export { server, CustomEvent, Solution };

// This code creates a Node.js server that listens on port 5000. When a POST request is made to the / endpoint, it extracts the name, email, and message from the request body and saves the user query to a file named queries.txt.

// The code also uses the Nodemailer library to send a confirmation email to the user's email address indicating that the query has been received and will be addressed soon. Once the email is sent successfully, the code emits a custom event named mailSent.

// To handle this custom event, the code creates a class CustomEvent that extends the built-in EventEmitter class. It defines a method mailSent that calls emit to trigger the mailSent event.

// The code also adds a listener to the mailSent event using customEvent.addListener. When the event is triggered, it logs a message to the console confirming that the email has been sent to the user's email address.

// Finally, the code starts the server and logs a message to the console indicating that the server is running on the specified port.
