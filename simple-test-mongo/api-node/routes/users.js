import express from "express";

const router = express.Router();

let users = [
  {
    nome: "Luca",
    cognome: "Rossi",
    email: "luca.rossi@gmail.it",
  },
  {
    nome: "Luca",
    cognome: "Rosi",
    email: "luca.rosi@gmail.it",
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("inserisco utente");
});

export default router;
