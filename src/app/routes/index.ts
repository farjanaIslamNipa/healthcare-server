import { Router } from "express";
import { CategoryRoutes } from "../modules/category/category.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { ProductRoutes } from "../modules/products/product.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
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