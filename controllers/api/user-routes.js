const router = require('express').Router();
const { User } = require("../../models");

router.post('/', async(req,res) =>{
    try{
        const dbUderData =await User.create({
            username:req.body.username,
            password:req.body.password,
        });

        req.session.save(()=>{
            req.session.loggedIn =true;
            req.session.username =dbUderData.username,
            req.session.userId = dbUderData.id;

            res.status(200).json(dbUderData);
        })
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.post('/login', async(req,res) =>{
    try{
        const dbUserData = await User.findOne({
            where:{
                username: req.body.username
            }
        });
        if(!dbUserData){
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;      
        }
        const validPassword = await dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password. Please try again!' });
            return;
          }

          req.session.save(()=>{
              req.session.loggedIn =true;
              req.session.username =dbUderData.username,
              req.session.userId = dbUderData.id;

              res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });

          });
             
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.post('/logout', async(req,res) =>{
    if(req.session.loggedIn) {
        req.session.destroy(()=>{
            res.status(204).end();
        });
    }
    else{
        res.status(404).end();
    }
});

router.delete('/user/:id', async(req,res) =>{
    try{
       const dbUderData= await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json(dbUderData);
    }
    catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;