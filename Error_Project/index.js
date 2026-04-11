const express = require("express");
const app = express();
const errorHandler = require('./Middleware/errorHandling');
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
});
app.use((req, res, next) => {
    const error = new Error("Something Went Wrong");
    error.statusCode = 404;
    error.status = "failed";
    next(error);
});
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Error running on http://localhost:3000");
});
