import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { students } from "./api/data.js";
import { videoGames } from "./api/data.js";
import { movies } from "./api/data.js";
import { bendRestaurants } from "./api/data.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(dirname, "public")));

app.get("/api/students", (req, res) => {
  res.send(students);
});

app.get("/api/videoGames", (req, res) => {
  res.send(videoGames);
});

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

app.get("/api/bendRestaurants", (req, res) => {
  res.send(bendRestaurants);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
