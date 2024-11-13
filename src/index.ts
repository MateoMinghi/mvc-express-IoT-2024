import dotenvFlow from "dotenv-flow";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";
import testRoutes from "./routes/test";
import validationError from "./middlewares/validation-errors";

//Para poder acceder a las variables del ambiente (.env)
if (process.env.NODE_ENV !== "production") {
  dotenvFlow.config();
}

const app = express();

console.log("Hello world");

app.use(express.json());

app.use("/api/v1/student", studentRouter);
app.use("/error", testRoutes);

app.use(validationError);
app.use(unknownResource); //middleware de error 404
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
