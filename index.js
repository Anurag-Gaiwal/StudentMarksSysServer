const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host:"sql12.freesqldatabase.com",
    user:"sql12716761",
    password:"jyLfKFXmmN",
    database:"sql12716761"
});

app.post("/save",(req,res)=>{
    let data = [req.body.rno,req.body.name,req.body.marks]
    let sql = "insert into smsStudent values(?,?,?)";
    con.query(sql,data,(err,result)=>{
        if(err)     res.send(err);
        else        res.send(result);
    });

});

app.get("/gs",(req,res)=>{
    let sql = "select * from smsStudent";
    con.query(sql,(err,result)=>{
        if(err)     res.send(err);
        else        res.send(result);
    });

});

app.delete("/ds",(req,res)=>{
    let data = [req.body.rno]
    let sql = "delete from smsStudent where rno = ?";
    con.query(sql,data,(err,result)=>{
        if(err)    
             res.send(err);
        else       
             res.send(result);
    });
});

app.put("/us",(req,res)=>{
    let data = [req.body.name,req.body.marks,req.body.rno]
    let sql = "update smsStudent set name = ?,marks = ? where rno=?";
    con.query(sql,data,(err,result)=>{
        if(err)    
             res.send(err);
        else       
             res.send(result);
    });
});

app.listen(9000,()=>{console.log("Server ready 9000...");})