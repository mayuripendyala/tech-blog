const { Model, DataTypes } = require('sequelize');
const bcrypt =require('bcrypt');
const sequelize = require('../config/connection');


class Comment extends Model {}

Comment.init({
    body:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    sequelize
}

);

module.exports =Comment;