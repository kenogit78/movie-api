import dbConn from "../config/db.config.js";

export const getMovies = (req, res) => {
    dbConn.query("Select * from movies",  (err, result) => {
        if(err) {
            console.log("error: ", err);
            res.status(400).json(null, err);
        }
        else{
            console.log('movie : ', result);
            res.status(200).json(result)          
        }
    }); 
}

export const getCharacters= (req, res) => {
    dbConn.query("Select * from characters",  (err, result) => {
        if(err) {
            console.log("error: ", err);
            res.status(400).json(null, err);
        }
        else{
            console.log('characters : ', result);
            res.status(200).json(result)
              
        }
    }); 
}

