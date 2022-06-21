const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database: 'node_db',
    dateStrings: 'date'
});
function getAllMemos(callback){
    connection.query(`SELECT * FROM MEMOS ORDER BY ID DESC`, (err, rows, fields) => {
        if(err) throw err;
        callback(rows);
    });
}
function insertMemo(content, callback){
    connection.query(`INSERT INTO MEMOS (CONTENT, CREATED_AT, UPDATED_AT) VALUES ('${content}',NOW(),NOW())`, (err, result) =>{
        if (err) throw err;
        callback();
    });
}

module.exports = {
    getAllMemos,
    insertMemo
}