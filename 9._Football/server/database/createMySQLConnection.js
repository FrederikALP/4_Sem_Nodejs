import dontenv from "dotenv"
dontenv.config();

import mysql from "mysql"

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//connection connect only works with it installed and the correct information given to connect to the mysql database
//connection.connect();

//this will only work when MySQL is installed on the localhost
//You need to install this to run mysql shell or the mysql interface

//default allows us to give the import any name when importing it
export default connection;