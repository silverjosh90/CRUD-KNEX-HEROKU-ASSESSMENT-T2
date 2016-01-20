var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var server = require('../serverlogic/serverlogic.js')

//
// router.get('/', function(req, res, next) {
//   Posts().select().then(function (posts) {
//     res.json({'SUCCESS': posts });
//   })
// });

router.get('/', function(req,res,next){
  var query="SELECT * FROM posts"
  server.runQuery(query, function(post) {
    var posts = post.rows;
    res.json({'SUCCESS': posts})
  })
})

router.post('/', function(req,res,next){
  console.log(req.body.body);
  var query="INSERT INTO posts VALUES(default,'"+req.body.author+"','"+req.body.body+"');"
  server.runQuery(query, function(post){
    var posts= post.rows[0]
    res.redirect('/')
  })
})

router.get("/:id", function(req,res,next){
  var query= "SELECT * FROM posts where id="+req.params.id
  server.runQuery(query, function(post){
    var posts = post.rows[0]
    res.json({'SUCCESS': posts})
  })
})

router.get('/:id/edit', function(req,res,next){
  res.json({"SUCCESS": "EDIT"})
})

router.post('/:id', function(req,res,next){
  var query = "UPDATE posts SET author='"+req.body.author+"', body='"+req.body.body+"' WHERE id="+req.params.id
  res.redirect('/')
})

router.post('/:id/delete', function(req,res,next){
  var query= "DELETE FROM posts WHERE id="+req.params.id
  server.runQuery(query, function(posts){
    res.redirect('/')
  })
})



module.exports = router;
