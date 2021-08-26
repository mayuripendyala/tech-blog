const { Model, DataType } = require('sequelize');
const bcrypt =require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model {
    checkPassword(loggedInPwd) {
        return bcrypt.compareSync(loggedInPwd,this.password);
    }
}

User.init({
    id:{
        type: DataType.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataType.STRING,
        allowNull:false
    },
    password:{
        type:DataType.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
},
{
    hooks:{
        async  beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData,20);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData,20);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'

});

module.exports = User;