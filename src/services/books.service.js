import booksRepositories from "../repositories/books.repositories.js";

async function createBooksService(newBook, userId) {
    const createBook = await booksRepositories.createBookRepositories(
        newBook,
        userId
    )
    if(!createBook) throw new Error("Erro creating Book")
    return createBook
}

async function findAllBooksService() {
    const books = await booksRepositories.findAllBooksRepositories()
    return books
}

async function findBookdByIdService(bookId) {
    const book = await booksRepositories.findBookByIdRepositories(bookId)
    if(!book) throw new Error ("Books not found!")
        return book
    
}

async function updateBookService(updateBook, bookId, userId) {
    const book = await booksRepositories.findBookByIdRepositories(bookId)
    if(!book) throw new Error ("Book not found!")
    if(book.userId !== userId) throw new Error("Unauthorized")
    const response = await booksRepositories.updateBooksRepositories(
        updateBook,
        bookId
    )    
    return response
}

async function deleteBookService(bookId, userId) {
    const book = await booksRepositories.findBookByIdRepositories(bookId)
    if(!book) throw new Error ("Book not found!")
    if(book.userId !== userId) throw new Error ("Unauthorized")
    const response = await booksRepositories.deleteBooksRepositories(bookId)
    return response
}

async function searchBookService(search) {
    if(!search) return await booksRepositories.findAllBooksRepositories()
    const books = await booksRepositories.searchBookRepositories(search)
    return books
}

export default {
    createBooksService,
    findAllBooksService,
    findBookdByIdService,
    updateBookService,
    deleteBookService,
    searchBookService
}