
const router = require("express").Router();
const { Comment} = require("../../model/");
const withAuth = require('../../utils/auth');

router.post("/",withAuth, async(req,res) => {

    try{
        const comment =Comment.create({...req.body,userId: req.session.userId});
        res.status(200).json(comment);
        }
    catch(err) {
        res.status(500).json(err);
      }
});

module.exports = router;