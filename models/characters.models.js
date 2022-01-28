'user strict';
import dbConn from '../config/db.config.js'


//character object create
const Character = function(character){
    this.name = character.name;
    this.height = character.height;
    this.gender = character.gender;
    this.movies = character.movies;
};

Character.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO character set ?", newEmp, function (err, res) {
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

Character.findById = function (id, result) {
    dbConn.query("Select * from character where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Character.findAll = function (result) {
    dbConn.query("Select * from character", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('character : ', res);  
            result(null, res);
        }
    });   
};

Character.update = function(id, character, result){
  dbConn.query("UPDATE character SET name=?,height=?,gender=?,movies=? WHERE id = ?", [character.name,character.height,character.gender,character.movies, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Character.delete = function(id, result){
     dbConn.query("DELETE FROM character WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Character;