import express from "express";
import RoleController from "../controllers/RoleController";
import UserController from "../controllers/UserController";
import Authorization from "../middleware/Authorization";
import UserValidation from "../middleware/validation/UserValidation";

const router = express.Router();

router.get("/role",Authorization.Authenticated,RoleController.GetRole);
router.post("/role",RoleController.CreateRole);
router.post("/role/:id",RoleController.UpdateRole);
router.delete("/role/:id",RoleController.DeleteRole);
router.get("/role/:id",RoleController.GetRoleById);

//Users Routing
router.post("/user/signup",UserValidation.RegisterValidation, UserController.Register);
router.post("/user/login",UserController.UserLogin)

export default router;