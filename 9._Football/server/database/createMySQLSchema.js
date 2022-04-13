import db from "./createMySQLConnection.js";

//this will create the schema
db.query(`
    CREATE TABLE IF NOT EXISTS players (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(70)
    )
`);

db.end();