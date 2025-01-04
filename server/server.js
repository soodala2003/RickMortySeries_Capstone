import express from "express";
import dotenv from "dotenv";
import db from "./db/conn.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import users from "./routes/users.js";
import season1 from "./routes/season1.js";
import season3 from "./routes/season3.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* const corsOptions ={
  origin: ["https://localhost:5173"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
};  */
//app.use(cors(corsOptions)); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Rick and Morty Series Capstone Back-End Deployment")
}); 

app.use("/api/users", users);
app.use("/api/season1", season1);
app.use("/api/season3", season3);
 
app.listen(PORT, () => {
  db();
  console.log(`Server is running on port: ${PORT}`);
});