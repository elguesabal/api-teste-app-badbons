import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import multer from "multer"; // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA
import axios from "axios";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use("/img", express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "img")));
axios.defaults.validateStatus = () => true;
dotenv.config();

// const storage = multer.diskStorage({ // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA
// 	destination: (req, file, cb) => {
// 		cb(null, path.join(path.dirname(fileURLToPath(import.meta.url)), "img"));
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, Date.now() + path.extname(file.originalname));
// 	}
// });
// const upload = multer({ storage });


import { ping, trainingLocations, timetableUnits, register, loginCredentials, credentials, loginToken, img } from "./sections/wellcome/wellcome.js";
app.get("/ping", ping);
app.get("/training-locations", trainingLocations);
app.get("/timetable-units", timetableUnits);
app.post("/register", register);
app.post("/auth/login", loginCredentials);
app.get("/credentials", credentials);
app.post("/auth/login-token", loginToken);
app.get("/img/:img", img);

import { uploadPhotoProfile, swapEmail, swapPassword, gameHistory, notifications, notification, swapCredentials } from "./sections/profile/profile.js";
// app.patch("/upload-photo-profile", upload.single("photo"), uploadPhotoProfile); // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA
app.patch("/user/update-image", uploadPhotoProfile);
app.patch("/swap-email", swapEmail);
app.post("/swap-password", swapPassword);
app.get("/game-history", gameHistory);
app.get("/notifications", notifications);
app.get("/notification", notification);
app.patch("/swap-credentials", swapCredentials);

import { presenceStudent, presenceList, exercises } from "./sections/home/home.js";
app.post("/presence-student", presenceStudent);
app.get("/presence-list", presenceList);
app.get("/user/treinos", exercises);


app.post("/test", (req, res) => {
    const bodyTest = req.body?.test;
    const queryTest = req.params.test;
    const headersTest = req.headers.test;

    if (!bodyTest) return (res.sendStatus(400));
    res.sendStatus(204);
});


app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));