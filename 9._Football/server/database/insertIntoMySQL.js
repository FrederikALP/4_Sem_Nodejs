import db from "./createMySQLConnection"

/*db.query(`INSERT INTO players (name) VALUES ('Malte')`, (err, data) => {
    console.log(data);

    db.end();
});
*/

const data = await db.query(`INSERT INTO players (name) VALUES ('Malte')`)