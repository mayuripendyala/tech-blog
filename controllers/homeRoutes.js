
const router = require("express").Router();
const { Post, Comment, User } = require("../models");


router.get('/',async(req,res)=>{
    try{
    const posts= await Post.findAll({
        include: [User],
    });
    if(!posts){
        res.status(200).json({message :'posts not found!'});
        return;
      }
  
      const postData = posts.map((post)=>post.get({plain :true}));
      res.render("all-posts",{postData});
  
    }
    catch(err) {
      res.status(500).json(err);
    }
});



router.get('/post/:id', async (req,res) => {
   try {
        const post = await Post.findByPk((req.params.id),{
            include: [User,
            {
                model: Comment,
                include: [User],
            },
        ]
        });
        
      const postData = post.get({plain :true});
      res.render("single-post",{postData});
  

    }
    catch(err) {
        res.status(500).json(err);
    }

});



router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });

module.exports =router;