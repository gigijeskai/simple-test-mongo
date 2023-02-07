import express from "express";

import userRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("benvenuto nella homepage"));

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
