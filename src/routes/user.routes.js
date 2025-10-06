import { Router } from "express"
import userControllers from "../controller/user.controllers.js";
import { validate, validateUserId } from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/users.schema.js";

const router = Router();

router.post('/users', validate(userSchema),  userControllers.createUserController)
router.get('/users', userControllers.findAllUserController)
router.get('/users/:id', validateUserId, userControllers.findUserByIdController)
router.patch('/users/:id' , validateUserId, userControllers.updateUserController)
router.delete('/users/:id', validateUserId, userControllers.deleteUserController)


export default router
