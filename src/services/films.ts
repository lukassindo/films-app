import { MovieFetch, Movies, Movie, Image } from "../models/models";

const getFilms = async (pickedCategory: string):Promise<Movies> => {

    const results = await fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json');
    const data = await results.json();
    console.log(data)
    const filmsData = data.feed.entry;
    const filmsToGo:[] = filmsData.map((movie:MovieFetch) => {
        let oneMovie:Movie = {
            title: movie.title.label,
            summary: movie.summary.label,
            image: movie["im:image"][2].label,
            category: movie.category.attributes.label
        } 
        return oneMovie;
    });
    if (pickedCategory && pickedCategory !== 'Film Genre') {
        const films = getMoviesByCategory(pickedCategory, filmsToGo)
        return films;
    }
    return filmsToGo;
}

const getMoviesByCategory = (pickedCategory: string, data:[]) => {
    let films:Movies =[]
    data.forEach((item:Movie) =>{
        if(item.category === pickedCategory) {
            films.push(item)
         } 
    })
    return films;
}

export {getFilms}
