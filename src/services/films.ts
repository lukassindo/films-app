import { stringify } from "querystring";
import { MovieFetch, Movies, Movie, Image } from "../models/models";

const getFilms = async ():Promise<Movies> => {
    const results = await fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json');
    const data = await results.json();
    const filmsData = data.feed.entry;
    console.log(filmsData);
    const filmsToGo:[] = filmsData.map((movie:MovieFetch) => {
    
        let oneMovie:Movie = {
            title: movie.title.label,
            summary: movie.summary.label,
            image: movie["im:image"][2].label,
            category: movie.category.attributes.label
        }
        
        return oneMovie;
    });
    return filmsToGo;
}

export {getFilms}
