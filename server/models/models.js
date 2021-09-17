const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Superhero = sequelize.define('superhero', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, unique: true, allowNull: false},
    real_name: {type: DataTypes.STRING},
    origin_description: {type: DataTypes.STRING, allowNull: false},
    superpowers: {type: DataTypes.STRING},
    catch_phrase: {type: DataTypes.STRING},
    images: {type: DataTypes.STRING},
})

module.exports = {
    Superhero
}