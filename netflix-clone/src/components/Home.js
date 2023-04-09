import{useState,useEffect} from 'react';
import MovieList from './MovieList'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Home(){
    
    const[movies,setMovies]=useState([]);
    async function getMovies(){
        // const url=process.env.REACT_APP_SERVER_URL;
        const url='https://movies-library2-q9kb.onrender.com'
        console.log(11111,url)
        const response = await fetch(`${url}/trending`);
        console.log(22222,response)
        const moviesData=await response.json();
        console.log(333333,moviesData)
        setMovies(moviesData);
        console.log(44444,movies);
    }
    useEffect(()=>{getMovies()},[])
    return(
        <>
        < MovieList movies={movies}/>
        </>
    )
    
    
}