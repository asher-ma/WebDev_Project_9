import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { students } from "./api/data.js";
import { videogames } from "./api/data.js";
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

app.get("/api/students", (req, res) => {
  res.send(videogames);
});

app.get("/api/students", (req, res) => {
  res.send(movies);
});

app.get("/api/students", (req, res) => {
  res.send(bendRestaurants);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
