var app = require('../app');
var port = process.env.PORT ||4000;



app.listen(port, () => {
    console.log(`express 실행 ${port}`);
})