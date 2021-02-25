const Mysql = require('mysql');

const mysqlConexion = Mysql.createConnection({
    host:"localhost",
    user:"ADMIN",
    password:"123456",
    database:"db.moneyeasy"
})

mysqlConexion.connect((err) => {
    if(err){
        console.log(err);
        return;
    }else{
        console.log("CONEXION A LA DB CORRECTA");
    }
})

module.exports = mysqlConexion;