const express = require('express');
//var mongo = require('mongodb');
const app = express();
var mysql = require('mysql');


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CRUD'

});

//CREATE DATABASE, TABLE AND  RECORDS IN CRUD!!!


con.connect(function (err) {
    if (err) throw err;
    console.log("connected!!");

    //creating database with the name CRUD;

    /*
    con.query("create database crud", function (err, result) {
        if(err) throw err;
        console.log('Database created');
    })
    */

    //creating tables in database CRUD
    /*
    var sql  = "create table students (id int auto_increment primary key, name varchar(255), address varchar(255) )"
    con.query(sql, function (err,result) {
        if (err) throw err;
            console.log("Table created");
    })
    */

    //inserting data into table students
    /*
    var sql  = "insert into students (name, address) values ?";
    var values = [
        ['John', 'Kasarani 23'],
        ['Musili', 'Luckysummer 12'],
        ['Moryn', 'Ruaraka'],
        ['Mayani', 'Umoja']
    ]
    con.query(sql,[values], function (err,result) {
        if (err) throw err;
            console.log("Number of rows inserted: " + result.affectedRows);


        })
        */

        //READ OPERATION IN CRUD
/*
        var sql  = "select * from students "
    con.query(sql, function (err,result) {
        if (err) throw err;
            console.log(result);
    })
*/
    //DELETE OPERATION IN CRUD
/*
    var sql  = "DELETE from students where address = 'umoja'"
    con.query(sql, function (err,result) {
        if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
    })
*/
    //UPDATE RECORDS IN CRUD

    var sql  = "Update students set address = 'umoja' where address = 'ruaraka'";
    con.query(sql, function (err,result) {
        if (err) throw err;
            console.log( result.affectedRows + ' records updated');
    })

});
