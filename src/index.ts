import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";
import testRoutes from "./routes/test";

//Para poder acceder a las variables del ambiente (.env)
config();

const app = express();

console.log("Hello world");

app.use(express.json());

app.use("/error", testRoutes);
app.use("/student", studentRouter);
app.use(unknownResource); //middleware de error 404
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
