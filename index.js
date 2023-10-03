const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json());
const userModel = require('./query.model.js');
const db = require('./db.config.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const checkDB = async () => {
  try {
    const client = await db.connect();

    console.log('Connected to postgres')
    client.release();

  } catch (error) {
    console.log('Error connecting database', error);
  }
}
checkDB();


// Create User
app.post('/users/create', async (req, res) => {
  const user = req.body;
  try {
    console.log(user.id, user.first_name, user.last_name, user.email)
    const newUser = await userModel.createUser(user);
    res.status(200).json(newUser);
  } catch (error) {
    console.error('error creating user : ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})


// Get all users
app.get('/users', async (req, res) => {
  try {
    const user = await userModel.getAllUser();
    res.json(user);

  } catch (error) {
    console.log('Error getting users : ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Get users by id
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.getUserbyID(userId);
    if (user) {
      res.json(user);
    }
    else {
      res.status(400).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log('Error getting users : ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Update user informations
app.put('/users/update/:id', async (req,res) => {
  const userId = req.params.id;
  const updateUserData = req.body;
  try{
    const updateUser = await userModel.updateUser(userId, updateUserData);
    if(updateUser){
      res.json(updateUser);
    }else{
      res.status(404).json({ message: 'User not found' });
    }
  }catch(error){
    console.error('Error updating user informations : ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Deleted user informations
app.delete('/users/deleted', async (req, res) => {
 const userId = req.body.id;
 try{
  const user = await userModel.deletedUser(userId);
  if(user){
    res.json({message: 'Deleted user successfully'})

  }else{
    res.status(404).json({message: 'User not found'});
  }

 }catch(error){
    console.error('Error deleting user informations : ', error);
    res.status(500).json({error: 'Internal server error'});
 }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})