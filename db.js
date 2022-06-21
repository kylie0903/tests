const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'us-cdbr-east-05.cleardb.net',
    user:'be757f1e07e52f',
    password:'da269012',
    port:3306,
    database: 'heroku_107edbb917886b8',
    dateStrings: 'date'
});

function getAllMemos(callback){
    connection.query(`SELECT * FROM memos ORDER BY ID DESC`, (err, rows, fields) => {
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