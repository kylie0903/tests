const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'us-cdbr-east-05.cleardb.net',
    user:'be757f1e07e52f',
    password:'da269012',
    port:3306,
    database: 'heroku_107edbb917886b8',
    dateStrings: 'date'
});


//리스트 전체를 불러오는 함수
function getAllMemos(callback) {
    connection.query('select * from memos ORDER BY id DESC', (err, rows, fields) =>{
        if(err) throw err;
        callback(rows);
   })
}
//리스트에 새로운 내용을 추가 하는 함수
function insertMemo(content, callback) {
    connection.query(`INSERT INTO memos(content,created,updated) VALUES('${content}',NOW(),NOW())`, (err, result) => {
         if(err) throw err;
        callback();
    })
}
//리스트 중 id값이 일치하는 row만 불러오는 함수
function getMemoById(id, callback) {
    connection.query(`select * from memos WHERE ID = ${id}`, (err, row, fields) =>{  if(err) throw err;
        callback(row);
   })
}

//리스트를 수정하고 싶을때 id값이 일치하는 부분을 수정하는 함수
function updateMemoById(id, content, callback) {
    connection.query(`UPDATE memos set content='${content}',updated = now() WHERE id=${id}`, (err, result) => {
        if (err) throw err;
        callback();
    });
}

//리스트중 id 값이 일치하는 부분을 삭제 하는 함수
function deleteMemoById(id, callback) {
    connection.query(`DELETE from memos WHERE ID = ${id}`, (err,  result) =>{
        if(err) throw err;
        callback();
   })
}
module.exports = {
    getAllMemos,
    insertMemo,
    getMemoById,
    updateMemoById,
    deleteMemoById
}