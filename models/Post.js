const { Model, DataType } = require('sequelize');
const bcrypt =require('bcrypt');
const sequelize = require('../config/connection');


class Post extends Model {}

Post.init({
    title:DataType.STRING,
    body:DataType.STRING
},
{
    sequelize
}

);

module.exports =Post;