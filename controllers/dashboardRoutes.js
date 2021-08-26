
const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");



router.get('/',withAuth,async(req,res)=>{
    try{
        const posts= await Post.findAll({
            where:{
                userId =req.session.userId
            }
        });
        if(!posts){
            res.status(200).json({message :'posts not found!'});
            return;
          }
      
          const postData = posts.map((post)=>post.get({plain :true}));
          res.render("all-posts-admin", {layout :"dashboard" , postData});
      
        }
        catch(err) {
          res.status(500).json(err);
        }
    });

    router.get ('/new',withAuth ,(req,res)=>{
        res.render("new-post",{layout:"dashboard"});

    });

    // router.get ('/edit/:id',withAuth ,async(req,res)=>{
    //     try{
    //         const post = await Post.findByPk((req.params.id),{
    //             where
            
    //         });

    //     }
        
    // })

    module.exports =router;