import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'stesh',
  password: 'steshdev',
  database: 'patakeja'
});
 
export default db;