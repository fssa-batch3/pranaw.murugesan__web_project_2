let mysql = require("mysql")


let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "scryptify"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT * FROM course",function(err,result){
if(err){
    throw err;
}
else{
    console.log(result);
}
})
