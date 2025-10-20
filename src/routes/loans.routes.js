import { Router } from "express"
import loansController from "../controller/loans.controller.js"
import { validate, validateLoanId } from "../middlewares/validation.middlewares.js"
import { loanSchema } from "../schema/loans.schema.js"

const router = Router()

router.post("/loans", validate(loanSchema), loansController.createLoansController)
router.get("/loans", loansController.findAllLoanController)
router.get("/loans/:id", validateLoanId, loansController.findAllLoanController)
router.delete("/loans/:id", validateLoanId, loansController.deleteLoanController)

export default router
