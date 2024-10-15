// routes/usuarios.ts
import { Router } from "express";
import { getStudents } from "../controllers/user";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/students", getStudents);

export default router;
