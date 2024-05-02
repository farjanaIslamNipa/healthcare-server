import { Router } from "express";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { ProductRoutes } from "../modules/products/product.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;