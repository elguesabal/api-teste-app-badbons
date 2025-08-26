import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
app.use("/img", express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "img")));

import { ping, trainingLocations, timetableUnits, register, loginCredentials, loginToken, img } from "./sections/wellcome.js";
app.get("/ping", ping);
app.get("/training-locations", trainingLocations);
app.get("/timetable-units", timetableUnits);
app.post("/register", register);
app.post("/login", loginCredentials);
app.post("/login-token", loginToken);
app.get("/img/:img", img);

import { gameHistory } from "./sections/profile.js";
app.get("/game-history", gameHistory);

import { presenceStudent, presenceList } from "./sections/home.js";
app.post("/presence-student", presenceStudent);
app.get("/presence-list", presenceList);

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));