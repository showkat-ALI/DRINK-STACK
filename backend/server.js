require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const productTRoutes = require("./routes/productTRoutes");
const app = express();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});
app.use("/api/drinks", productTRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/my-app/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "frontend", "my-app", "build", "index.js")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("api running");
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on the port${PORT}`);
});
