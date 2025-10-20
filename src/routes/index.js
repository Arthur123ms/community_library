import router from 'express'
import userRouter from "./user.routes.js"
import bookRouter from "./books.routes.js"
import loanRouter from "./loans.routes.js"

const routers = router()

routers.use("/users",userRouter)
routers.use("/books",bookRouter)
routers.use("/loans",loanRouter)

export { routers }