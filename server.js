const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/api/v1/auth", authRoutes);
const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/user", userRoutes);


app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Database Connected"))
.catch(err => console.log("DB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/v1/tasks", taskRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/v1/admin", adminRoutes);

const errorMiddleware = require("./middleware/errorMiddleware");
app.use(errorMiddleware);
