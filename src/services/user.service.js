import userRepositories from "../repositories/user.repositories.js";
import bcrypt from 'bcrypt'

async function createUserService(newUser){
    const foundUser = await userRepositories.findUserByEmailRepositories(newUser.email)
    if(foundUser) throw new Error('User already exists!')
    
    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepositories.createUserRepositories({...newUser, password: passHash,})
    if(!user) throw new Error("Error creating User!")
    return user
}

async function findAllUserService() {
    const users = await userRepositories.findAllUserRepositories()
    return users
}

async function findUserById(id) {
    const user = await userRepositories.findUserByIdRepositories(id)
    if(!user) throw new Error("User not found!")
    return user
    
}

async function updateUserService(newUser, userId) {
    const user = await userRepositories.findUserByIdRepositories(userId)
    if(!user) throw new Error("User not found!")
    if(newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10)
    }
    
    const userUpdated = await userRepositories.updateUserRepositories(userId, newUser)
    return userUpdated
}

async function deleteUserService(userId) {
    const user = await userRepositories.findUserByIdRepositories(userId)
    if(!user) throw new Error('User not found')
    const {message} = await userRepositories.deleteUserRepositories(userId)
    return message
    
}

export default{
    createUserService,
    findAllUserService,
    findUserById,
    updateUserService,
    deleteUserService
}
