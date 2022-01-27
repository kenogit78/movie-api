import fetch from 'node-fetch';

// let movies = [];

export const getMovies = async (req, res) => {
    const api_url = 'https://swapi.py4e.com/api/films/';

    const response = await fetch(api_url);

    const data = await response.json();

    const { results } = data;

    const newResults = results.map((result) => {
        const { title, episode_id, opening_crawl, characters } = result;
        
        const newCharacters = Promise.all(characters.map(async (character) => {
            const newCharacterResponse = await fetch(character);
            const dataCharacter = await newCharacterResponse.json();
            return dataCharacter.name;
        }));

        return { title, episode_id, opening_crawl, characters };
    }); console.log(newResults);

    const { characters } = newResults;
    const newCharacters = characters.map( async (character) => {
        const resp = await fetch(character);
        const datap = await resp.json();
        return datap.name;
    });



    res.send('Successful');
    // res.json(newResults);
}

// export const addComment = (req, res) => {
//    //logic to push comment and id into the movie object
// }
