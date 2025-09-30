import userRepositories from "../repositories/user.repositories.js";
import bcrypt from 'bcrypt'

async function createUserService(newUser){
    const foundUser = await userRepositories.findUserByEmailRepositories(newUser.email)
    if(foundUser) throw new Error('User already exists')
    
    const passHash = await bcrypt.hash(newUser.password, 10)
    const user = await userRepositories.createUserRepositories({...newUser, password: passHash,})
    if(!user) throw new Error("Error creating User")
    return user
}

export default{
    createUserService

}
