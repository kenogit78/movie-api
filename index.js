import express from "express";
import bodyParser from "body-parser";
import { addMovies, addCharacters } from "./services/swapi.js"
import Routes from "./routes/routes.js";
import dbConn from './config/db.config.js'


const app = express();
const PORT = 5000;


app.use(bodyParser.json());

app.use("/", Routes);
app.get("/", (req, res) => res.send("Welcome to the Star Wars Movie API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

// addCharacters(2, 1);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
