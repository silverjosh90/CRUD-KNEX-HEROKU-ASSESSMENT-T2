var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var server = require('../serverlogic/serverlogic.js')

router.get('/:post_id/comments', function(req, res, next) { var query = "SELECT * FROM comments where post_id="+req.params.post_id
server.runQuery(query, function(post){
  var posts = post.rows
  console.log(posts);
  res.json({"SUCCESS": posts});
})
});

router.post('/:post_id/comments', function(req,res,next){
  var query = "INSERT INTO comments VALUES(default,"+req.body.post_id+",'"+req.body.commenter+"','"+req.body.body+"');"
  server.runQuery(query, function(posts){
    res.redirect('/posts/'+req.params.post_id+"/comments")
  })
})

router.get('/:post_id/comments/:id', function(req,res,next){
  var query = "SELECT * FROM comments where id="+req.params.id
  server.runQuery(query, function(post){
    var posts = post.rows[0]
    res.json({"SUCCESS": posts})
  })
})

router.get('/:post_id/comments/:id/edit', function(req,res,next){
  res.json({"SUCCESS": posts})
})

router.post('/:post_id/comments/:id', function(req,res,next){
  var query = "UPDATE comments SET post_id="+req.params.post_id+", commenter='"+req.body.commenter+"', body='"+req.body.body+"' WHERE id="+req.params.id
  server.runQuery(query, function(post){
    res.redirect("/posts/"+req.params.post_id+"/comments")

  })
})

router.post('/:post_id/comments/:id/delete', function(req,res,next){
  var query = "DELETE FROM comments WHERE id="+req.params.id
  server.runQuery(query, function(post){
    res.redirect("/posts/"+req.params.post_id+"/comments")
  })
})


module.exports = router;
