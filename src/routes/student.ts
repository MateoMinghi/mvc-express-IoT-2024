// routes/usuarios.ts
import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../controllers/student";
import validate from "../middlewares/validate";
import { studentSchema } from "../schemas/student";

const router = Router();

router.get("/", getStudents); // Regresa todos los alumnos en la base de datos
router.post("/", validate(studentSchema), createStudent);
router.put("/:id", validate(studentSchema), updateStudent);
router.delete("/:id", deleteStudent);

export default router;
