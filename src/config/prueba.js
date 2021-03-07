const DB = require("./db.conexion");

let nombre='';

const D = () => {
    DB.query(`insert into usuarios (NOMBRE, APELLIDO) VALUE (${nombre})`, (err, row, fields) => {
        if(!err){
            console.log(row);
        }
        else{
            console.log(err)
        }
    })
}


D();