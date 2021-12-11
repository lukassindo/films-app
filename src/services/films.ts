import { MovieFetch, Movies, Movie, Image } from "../models/models";

const getFilms = async (pickedCategory: string, searchPhrase: string):Promise<Movies> => {

    const results = await fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json');
    const data = await results.json();
    console.log(data)
    const filmsData = data.feed.entry;
    let filmsToGo:Movies = filmsData.map((movie:MovieFetch) => {
        let oneMovie:Movie = {
            title: movie.title.label,
            summary: movie.summary.label,
            image: movie["im:image"][2].label,
            category: movie.category.attributes.label
        } 
        return oneMovie;
    });
    if (pickedCategory && pickedCategory !== 'Film Genre') {
        filmsToGo = getMoviesByCategory(pickedCategory, filmsToGo)
    }
    if(searchPhrase) {
        filmsToGo = getMoviesBySearch(searchPhrase, filmsToGo)
    }

    return filmsToGo;
}

const getMoviesByCategory = (pickedCategory: string, data:Movies) => {
    let films:Movies = []
    data.forEach((item:Movie) =>{
        if(item.category === pickedCategory) {
            films.push(item)
         } 
    })
    return films;
}

const getMoviesBySearch = (searchPhrase: string, data:Movies) => {
    let films:Movies = [];
    data.forEach((item:Movie) => {
        console.log(item);
        if(item.title.toLowerCase().includes(searchPhrase.toLowerCase())) {
            films.push(item)
        } 
    });
    return films;
}

export {getFilms}
