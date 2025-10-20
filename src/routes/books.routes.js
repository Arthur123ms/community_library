import bookController from "../controller/book.controller.js";
import { Router } from "express"
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validate, validateBookId } from "../middlewares/validation.middlewares.js"
import { booksSchema } from "../schema/books.schema.js"


const router = Router()

router.get("/", bookController.findAllBooksController)

router.use(authMiddleware)

router.post("", validate(booksSchema), bookController.createBooksController)
router.get("/search", bookController.searchBookController)
router.get("/:id", validateBookId, bookController.findBookByIdController)
router.patch("/:id", validateBookId, bookController.updateBookController)
router.delete("/:id", validateBookId, bookController.deleteBookController)

export default router;