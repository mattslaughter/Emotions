var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
app.get('/', function (req, res) {
  res.render('index.ejs', {});
});
app.get('/newuser',  function(db, callback) {
   db.collection('restaurants').insertOne( {
      "emotions" : {
         "values" : 'i',
        
      }
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
});
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
}); 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



//
//var express = require('express')
//var app = express()
//var bodyParser = require('body-parser')
//var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');
//var ObjectId = require('mongodb').ObjectID;
//var url = 'mongodb://localhost/test';


//var insertDocument = function(db, callback) {
//   db.collection('restaurants').insertOne( {
//      "emovalues" : "goldfish"
//      
//   }, function(err, result) {
//    assert.equal(err, null);
//    console.log("Inserted a document into the restaurants collection.");
//    callback();
//  });
//};


//MongoClient.connect(url, function(err, db) {
//  assert.equal(null, err);
// 
//});
//
//app.get('/', function (req, res) {
// res.render('index.ejs', {});
//});
//
////Dave's stuff that....doesn't work?
//app.get('/newuser',  function(db, callback) {
//   db.collection('restaurants').insertOne( {
//      "emotions" : {
//         "values" : 'i',
//        
//      }
//   }, function(err, result) {
//    assert.equal(err, null);
//    console.log("Inserted a document into the restaurants collection.");
//    callback();
//  });
//});
//
//
//app.listen(3000, function () {
// console.log('Example app listening on port 3000!');
//});
//         
//app.set('view engine', 'ejs')
//app.use(bodyParser.urlencoded({extended: true}))
//app.use(bodyParser.json())
//app.use(express.static('public'))





//Old stuff we couldn't get working
//app.get('/restaurants', (req,res)=>{
//     insertDocument(db, function() {
//      db.close();
//     })
//  });

//Dave's example
//app.get('/upvote', function(req, res) {
//   User.update({_id: req.user._id}, {$inc: {score: 1}}, function(err, count) {
//       res.redirect('/dashboard');
//   });
//});


//const express = require('express')
//const app = express()
//const bodyParser = require('body-parser')
//const MongoClient = require('mongodb').MongoClient
//
//var db
//
////mongodb://zellwk:zellwk@ds047955.mongolab.com:47955/star-wars-quotes
//
//
//
//
//MongoClient.connect('mongodb://localhost/test', (err, database) => {
//  if (err) return console.log(err)
//  db = database
//  app.listen(process.env.PORT || 3000, () => {
//    console.log('listening on 3000')
//  })
//})
//
//
//
//app.set('view engine', 'ejs')
//app.use(bodyParser.urlencoded({extended: true}))
//app.use(bodyParser.json())
//app.use(express.static('public'))
//
//app.get('/', (req, res) => {
//    res.render('index.ejs')
//})
//
//app.post('/feels', (req, res) => {
//  db.collection('emo.valArray').save(req.body, (err, result) => {
//    if (err) return console.log(err)
//    console.log('saved to database')
//    res.redirect('/')
//})
//})

//  console.log("hashbrowns");
//    .find().toArray((err, result) => {
//    if (err) return console.log(err)
//    res.render('index.ejs', {quotes: result})
//  })
//app.post('/quotes', (req, res) => {
//  db.collection('quotes').save(req.body, (err, result) => {
//    if (err) return console.log(err)
//    console.log('saved to database')
//    res.redirect('/')
//  })
//})
//
//app.put('/quotes', (req, res) => {
//  db.collection('quotes')
//  .findOneAndUpdate({name: 'Yoda'}, {
//    $set: {
//      name: req.body.name,
//      quote: req.body.quote,
//      test: req.body.test    
//    }
//  }, {
//    sort: {_id: -1},
//    upsert: true
//  }, (err, result) => {
//    if (err) return res.send(err)
//    res.send(result)
//  })
//})
//
//app.delete('/quotes', (req, res) => {
//  db.collection('quotes').findOneAndDelete({name: req.body.name}, (err, result) => {
//    if (err) return res.send(500, err)
//    res.send('A darth vadar quote got deleted')
//  })
//})
