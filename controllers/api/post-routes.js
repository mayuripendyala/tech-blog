const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post('/', withAuth,async (req,res)=>{
    try{

        const post =Post.create({...req.body,userId: req.session.userId});
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }
});


router.put('/:id', withAuth,async (req,res)=>{
    try{

        const updatedPost =Post.update(req.body,
            { 
                where:{id: req.params.id}
                
            });

        if(updatedPost>0){
            res.status(200).end();
        }
        else{
            res.status(400).end();
        }
        
    }
    catch(err){
        res.status(500).json(err);
    }
});


router.delete('/:id', withAuth,async (req,res)=>{
    try{

        const deletedpost =Post.destroy({
            where:{
                id: req.params.id
            }
            });

        if(deletedpost>0){
            res.status(200).end();
        }
        else{
            res.status(400).end();
        }
        
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;