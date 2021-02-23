const DB = require("./db.conexion");

const D = () => {
    DB.query("select * from usuarios", (err, row, fields) => {
        if(!err){
            console.log(row);
        }
        else{
            console.log(err)
        }
    })
}


D();