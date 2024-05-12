const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const port = process.env.PORT || 9988;
const app = express();
const path = require("path");

// load config and vars
dotenv.config({ path: "./config/config.env" });
const ConnectDB = require("./config/db");
const errorHandler = require("./middleware/error");
// load routes here
const products = require("./routes/Products");
const menuitems = require("./routes/Menubar");
const users = require("./routes/Users");
const buyItem = require("./routes/AddCart");
const features = require("./routes/Category");
// app middlewares
app.use(express.json());
app.use(cors());

// routes called here
app.use("/api/products", products);
app.use("/api/products/:id", products);
app.use("/api/products/:category", products);
app.use("/api/menus", menuitems);
app.use("/api/menus/:id", menuitems);
app.use("/api/users", users);
app.use("/api/users/:id", users);
app.use("/api/buy-items", buyItem);
app.use("/api/buy-items/:id", buyItem);
app.use("/api/features", features);
// db connected
ConnectDB();

// error
app.use(errorHandler);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// default routes
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, data: "The Main Server Is Running Now!" });
});

app.listen(port, () => {
  console.log(
    `The server is running in ${process.env.NODE_ENV} on port ${process.env.PORT}`
      .yellow.bold
  );
});
