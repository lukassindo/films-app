import React, {useEffect, useState, useRef, useMemo} from 'react';
import '../../App.css';
import Header from '../header/Header'
import BigMovie from '../bigMovie/BigMovie';
import Footer from '../footer/Footer';
import SliderComponent from '../slider/Slider';
import { Movies, Movie } from '../../models/models';
import { getFilms } from '../../services/films';

const Main = () => {
    const CATEGORIES = ['Action & Adventure','Kids & Family','Comedy','Drama','Sci-Fi & Fantasy','Documentary','Western','Romance','Musicals','Horror'];
    const [films, setFilms] = useState<Movies>([]);
    const [pickedCategory, setPickedCategory] = useState<string>('');
    const [pickedMovie, setPickedMovie] = useState<Movie>({title: '', summary: '', image: '', category: ''});
    const [searchPhrase, setPhrase]  = useState<string>('');
   
    useEffect(()=> {
        const getData =  async () => {
            const data = await getFilms(pickedCategory, searchPhrase);
            setFilms(data);
        } 
        getData();
    },[pickedCategory, searchPhrase]);

    const getCategory = (category:string) => {
        setPickedCategory(category);
    }

    const getSearch = (phrase:string) => {
        setPhrase(phrase);
    }

    const getPickedMovie = (movie:Movie) => {
        setPickedMovie(movie);
    }

    return (
        <>
        <Header categories={CATEGORIES} getCategory={getCategory} getSearch={getSearch}/> 
        {(films.length > 0) && <BigMovie  picked={pickedMovie} film={films[0]}/>}
        {(films) && <SliderComponent getMovie={getPickedMovie} films = {films}/>}
        <Footer/>
        </>
    )
}

export default Main;