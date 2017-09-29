'use strict';
// Include our "db"
var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = {getAll, save, getOne};

//GET /movie operationId
function getAll(req, res, next) {
    res.json({ movies: db.find()});
}
//POST /movie operationId
function save(req, res, next) {
    res.json({success: db.save(req.body), description: "Movie added to the list!"});
}
//GET /movie/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = db.find(id);
    if(movie) {
        res.json(movie);
    }else {
        res.status(204).send();
    }
}