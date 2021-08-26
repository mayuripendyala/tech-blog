// middleware  to verify  user logged in before restricted route access

const withAuth =(req, res, next) => {

    if(!req.session.loggedIn) {
        res.redirect('/login');
    }else{
        next();
    }
};

module.exports = withAuth;