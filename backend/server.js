import express from "express";
import data from "./data.js";
import path from "path";

const app = express();

app.get("/api/workout", (req, res) => {
  res.send(data.workout);
});

app.get("/api/meal", (req, res) => {
  res.send(data.meals);
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
