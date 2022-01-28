'user strict';
import dbConn from '../config/db.config.js'


//Movie object create
const Movie = function(movie){
    this.title = movie.title;
    this.episode_id = movie.episode_id;
    this.opening_crawl = movie.opening_crawl;
    this.characters = movie.characters;
};

Movie.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO movie set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

Movie.findById = function (id, result) {
    dbConn.query("Select * from movie where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Movie.findAll = function (result) {
    dbConn.query("Select * from movie", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('movie : ', res);  
            result(null, res);
        }
    });   
};

Movie.update = function(id, Movie, result){
  dbConn.query("UPDATE movie SET title=?,episode_id=?,opening_crawl=?,characters=? WHERE id = ?", [Movie.title,Movie.episode_id,Movie.opening_crawl,Movie.characters, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Movie.delete = function(id, result){
     dbConn.query("DELETE FROM movie WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Movie;