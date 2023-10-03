const User = require('./table.models.js');

const createUser = async (user) => {
    try {
        const newUser = await User.create(user);
        return newUser;

    } catch (error) {
        throw error;
    }
}

const getAllUser = async () => { 
    try{
        const findUS = await User.findAll();
        return findUS;

    }catch(error) {
        throw error;
    }
 }

const getUserbyID = async(userId) => {
    try{
        const user = await User.findByPk(userId);
        return user;
    }catch(error){
        throw error;
    }
}

const updateUser = async(userId, updateData) =>{
    const user = await User.findByPk(userId);
    try{
        if(user){
            await user.update(updateData);
            return user;
        }
        else{
            return "Not found";
        }
    }catch(error){
        throw error;
    }
}

const deletedUser = async(userId) =>{
    const user = await User.findByPk(userId);
    if(user){
        await user.destroy();
        return user;
    }else{
        return "Not found";
    }
}


module.exports = {
    createUser,
    getAllUser,
    getUserbyID,
    updateUser,
    deletedUser
};
