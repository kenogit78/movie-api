import dbConn from '../config/db.config.js';
import { getResource } from '../utils/swapi.js'


export const addMovies = (id) => {
    return ( 
        getResource(`films/${id}`).then(data => {
        let response = data;
   
        let movieData = `INSERT INTO movies (title, episode_id, opening_crawl ) VALUES (?, ?, ?);`;
        
         dbConn.query( movieData, [response.title, response.episode_id, response.opening_crawl], 
         (err, result) => {
            if(err) {
                console.log("error: ", err);
            }
            else{
                console.log(result);
            }
        });    
    })
  )}
    


export const addCharacters = (id, moviesID) => {
    return (
        getResource(`people/${id}`).then(data => {
           
            let response = data;
            console.log(moviesID)
          
   
            let characterData = `INSERT INTO characters (name, height, gender, movies ) VALUES (?, ?, ?, ?);`;
            
             dbConn.query( characterData, [response.name, response.height, response.gender, moviesID ], 
             (err, result) => {
                if(err) {
                    console.log("error: ", err);
                }
                else{
                    console.log(result);
                }
            });    
        })
      )}
        

