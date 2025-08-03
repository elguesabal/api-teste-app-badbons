import express from "express";

const app = express();
app.use(express.json());

import { ping, trainingLocations, timetableUnits, register, loginCredentials, loginToken } from "./sections/wellcome.js";
app.get("/ping", ping);
app.get("/training-locations", trainingLocations);
app.get("/timetable-units", timetableUnits);
app.post("/register", register);
app.post("/login", loginCredentials);
app.post("/login-token", loginToken);

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));