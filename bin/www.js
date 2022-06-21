var app = require('../app');
<<<<<<< HEAD
var port = process.env.PORT ||4000;
=======
var port =process.env.PORT || 4000;
>>>>>>> ba322446dd02d422906524b9542dbf08441ebad0



app.listen(port, () => {
    console.log(`express 실행 ${port}`);
})
