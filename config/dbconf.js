require('dotenv').config({silent: true},{path:`.env.${process.env.ENV}`});
module.exports = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: "mysql"
};

