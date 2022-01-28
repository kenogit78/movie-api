import mysql from 'mysql'
import 'dotenv/config'

const dbConn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

dbConn.connect((err) => {
    if(err) {
        console.log(err.message)
    }else
    console.log('Database Connected')
});

export default dbConn;