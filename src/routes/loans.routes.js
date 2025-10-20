import { Router } from "express"
import loansController from "../controller/loans.controller.js"
import { validate, validateLoanId } from "../middlewares/validation.middlewares.js"
import { loanSchema } from "../schema/loans.schema.js"

const router = Router()

router.post("/", validate(loanSchema), loansController.createLoansController)
router.get("/", loansController.findAllLoanController)
router.get("/:id", validateLoanId, loansController.findAllLoanController)
router.delete("/:id", validateLoanId, loansController.deleteLoanController)

export default router
