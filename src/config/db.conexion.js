const Mysql = require('mysql');

const mysqlConexion = Mysql.createConnection({
    host:"bf5ooemjkvdi0afy6ibf-mysql.services.clever-cloud.com",
    user:"u1iy976c0vmgct5e",
    password:"LwLnO4gaZNhAMxPH2WYA",
    database:"bf5ooemjkvdi0afy6ibf"
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