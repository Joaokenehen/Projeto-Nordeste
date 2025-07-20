import express from "express";
import sequelize from "./config/database";
import UserRoutes from "./routes/UserRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/test", (req, res) => {
  res.send("Server is running!");
});

app.use(express.json());
app.use(UserRoutes);

// sync database
/* sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database has been sincronized");
  })
  .catch((error) => {
    console.log("Database sincronization has failed");
  }); */
// sync database

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
