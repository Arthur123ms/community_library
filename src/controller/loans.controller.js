import loansService from "../services/loans.service.js";

async function createLoansController (req, res){
    const { bookId, dueDate } = req.body
    const userId = req.userId

    try{
        const createLoan = await loansService.createLoansService(
            userId,
            bookId,
            dueDate
        )
        res.status(201).send(createLoan)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

async function findAllLoanController(req, res) {
    try{
        const loan = await loansService.findAllLoansService()
        res.send(loan)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

async function findByIdLoanController(req, res) {
    const loanId = req.params.id

    try{
        const loans = await loansService.findByIdLoanService(loanId)
        return res.send(loans)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function deleteLoanController(req, res) {
    const loanId = req.params.id
    const userId = req.userId

    try{
        const response = await loansService.deleteLoanService(loanId, userId)
        return res.send(response)
    } catch (error) {
        res.status(400).send(error.message)
    } 
}

export default{
    createLoansController,
    findAllLoanController,
    findByIdLoanController,
    deleteLoanController
}