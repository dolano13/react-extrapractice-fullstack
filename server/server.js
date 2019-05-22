const express = require("express");

const app = express();
//when you want to do somethin using the express server reference to it by using app

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
