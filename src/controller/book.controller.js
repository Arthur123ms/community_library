import booksService from "../services/books.service.js";

async function createBooksController(req, res) {
    const newBooks = req.body
    const userId = req.userId

    try{
        const createBooks = await booksService.createBooksService(newBooks, userId)
        res.status(201).send(createBooks)
    } catch (error) {
      res.status(400).send(error.message)
    }
}

async function findAllBooksController(req, res) {
    try{
        const books = await booksService.findAllBooksService()
        res.send(books)
    } catch (error) {
      res.status(400).send(error.message)
    }
    
}

async function findBookByIdController(req, res) {
    const bookId = req.params.id

    try{
        const book = await booksService.findBookdByIdService(bookId)
        return res.send(book)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

async function updateBookController(req, res) {
    const updateBook = req.body
    const bookId = req.params.id
    const userId = req.userId

    try {
        const response = await booksService.updateBookService(
            updateBook,
            bookId,
            userId
        )
        return res.send(response)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

async function deleteBookController(req, res) {
    const bookId = req.params.id
    const userId = req.userId

    try{
        const response = await booksService.deleteBookService(bookId, userId)
        return res.send(response)
    } catch (error) {
        res.status(400).send(error.message)

    }
}

async function searchBookController(req, res) {
    const { search } = req.query

    try{
        const books = await booksService.searchBookService(search)
        res.send((books))
    } catch (error){
        res.status(400).send(error.message)
    }
}

export default {
    createBooksController,
    findAllBooksController,
    findBookByIdController,
    updateBookController,
    deleteBookController,
    searchBookController
}
