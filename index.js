import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import multer from "multer"; // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA

const app = express();
app.use(express.json());
app.use("/img", express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "img")));

// const storage = multer.diskStorage({ // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA
// 	destination: (req, file, cb) => {
// 		cb(null, path.join(path.dirname(fileURLToPath(import.meta.url)), "img"));
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, Date.now() + path.extname(file.originalname));
// 	}
// });
// const upload = multer({ storage });


import { ping, trainingLocations, timetableUnits, register, loginCredentials, loginToken, img } from "./sections/wellcome/wellcome.js";
app.get("/ping", ping);
app.get("/training-locations", trainingLocations);
app.get("/timetable-units", timetableUnits);
app.post("/register", register);
app.post("/login", loginCredentials);
app.post("/login-token", loginToken);
app.get("/img/:img", img);

import { uploadPhotoProfile, swapEmail, swapPassword, gameHistory } from "./sections/profile.js";
// app.post("/upload-photo-profile", upload.single("photo"), uploadPhotoProfile); // COMENTANDO ESSE TRECHO DO CODIGO PQ O VERCEL NAO ME DA PERMISSAO DE ESCRITA
app.post("/upload-photo-profile", uploadPhotoProfile);
app.post("/swap-email", swapEmail);
app.post("/swap-password", swapPassword);
app.get("/game-history", gameHistory);

import { presenceStudent, presenceList } from "./sections/home.js";
app.post("/presence-student", presenceStudent);
app.get("/presence-list", presenceList);

app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando"));