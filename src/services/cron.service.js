import cron from 'node-cron'
import moment from 'moment'
import sendEmail from './email.service.js'
import loanRepositories from "../repositories/loans.repositories.js"


cron.schedule('58 * * * *', async () => {
    console.log('Runnig daily job check for due Date...')
    const loans = await loanRepositories.findAllLoanRepositories()
    const today = moment().startOf('day')

    loans.forEach(async (loan) => {
        const dueDate = moment(loan.dueDate).startOf("day")
        const remeinderDueDate = moment(dueDate).subtract(1, "days")
        if(today.isSame(remeinderDueDate)){
            sendEmail(loans.email, loans.title, loan.dueDate)
        }
    });
})