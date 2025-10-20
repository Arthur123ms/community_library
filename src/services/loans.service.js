import loansRepositories from "../repositories/loans.repositories.js";

async function createLoansService(userId, bookId, dueDate) {
    const createLoans = loansRepositories.createLoanRespositories(
        userId,
        bookId,
        dueDate
    )
    if(!createLoans) throw new Error ("Error creating Loan")
    return createLoans
}

async function findAllLoansService() {
    const loans = loansRepositories.findAllLoanRepositories()
    return loans
}

async function findByIdLoanService(loanId){
    const loan = await loansRepositories.findLoansByIdRepositories(loanId)
    if(!loan) throw new Error ("Loan not found")
    return loan
}

async function deleteLoanService(loanId, userId) {
    const loan = await loansRepositories.findLoansByIdRepositories(loanId)
    if(!loan) throw new Error ("Loan not found")
    if(loan.userId !== userId) throw new Error("Unauthorized!")
    const response = await loansRepositories.deleteLoanRepositories(loanId)
    return response
}

export default{
    createLoansService,
    findAllLoansService,
    findByIdLoanService,
    deleteLoanService
} 
