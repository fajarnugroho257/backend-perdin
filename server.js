const express = require("express");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const kotaRoute = require("./routes/kotaRoutes");
const perdinRoute = require("./routes/perdinRoutes");
require("dotenv").config();
const cors = require("cors");

const app = express();

// CORS
app.use(
  cors({
    origin: "http://127.0.0.1:3000", // Sesuaikan dengan alamat frontend React
    credentials: true, // Izinkan cookie atau token dikirim
  })
);

app.use(express.urlencoded({ extended: true }));

const port = 8000;

connectDB();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/kota", kotaRoute);
app.use("/perdin", perdinRoute);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
