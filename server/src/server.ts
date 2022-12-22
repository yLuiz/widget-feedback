import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

//MidleWare
app.use(cors({
  origin: '*'

}))
app.use(express.json());
app.use(routes)


app.listen(process.env.port || 3333, () => console.log("Server is running!"));