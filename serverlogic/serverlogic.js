require('dotenv').load()

var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL|| 'postgres://localhost/posts_development';
var localString ='postgres://localhost/posts_development';
var app = express();
var knex = require('knex')


function runQuery (query,callback){
  var client = 'pg';
     pg.connect(connectionString, function(err, client, done) {
       if (err) {
          pg.connect(localString, function(err, client, done){
            console.log("this worked");
            client.query(query, function(err,results){
              done();
              if(err) {console.log(err); return; }
              callback(results);
            });
            //  console.log(err); return;
          });
          }
    });
   }


 module.exports = {
   runQuery: runQuery
 }
