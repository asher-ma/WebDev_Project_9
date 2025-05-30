import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// TODO: export the other data variables in data.js,
// then import the data here
import { students } from "./api/data.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(dirname, "public")));

app.get("/api/students", (req, res) => {
  res.send(students);
});

// TODO:
// add new app.get for games, movies, and restaurants

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
