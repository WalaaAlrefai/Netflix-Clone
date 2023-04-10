import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
export default function FavList(){
   const [favoriteMovie,setFavoriteMovie]=useState([])
    async function getFavorite(){
        let url=`${process.env.REACT_APP_SERVER_URL}/getMovies`
        let response= await fetch(url,{
            method:'GET',
        })
        let recivedData = await response.json();
        setFavoriteMovie(recivedData)
           
        
    }

  async function handleDelete(id){
    let url=`${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`
    let response=await fetch(url,{
        method:"DELETE", 
        headers: {
            "Content-Type": "application/json",
        },
    })

  
  if(response.status===204){
    alert ("successfuly Deleted !!");
    getFavorite();
   
  }
}

async function handleUpdate(id,comment){
    let url=`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`

    let data={
        comment:comment
    }
    const response = await fetch(url,{
        method:"PUT", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    // const recivedData = await response.json();
    // console.log(recivedData)
    if(response.send ==="updated"){
        // getFavorite();
        alert ("successfuly Updated !!");
    }
}


    useEffect(()=>{
        getFavorite();
        // console.log(77,favoriteMovie);
    },[])
    return(
        <>
        {
            favoriteMovie && favoriteMovie.map(movie=>{
                return(
                    <Card style={{width:"20rem"}}>
                    <Card.Img varient='top' src={`${'https://www.themoviedb.org/t/p/w220_and_h330_face/'}${movie.poster_path}`}/>
                    <Card.Body>
                       <Card.Title>{movie.Title}</Card.Title>
                       <Card.Text>{movie.overview}</Card.Text>
                       <Button variant="danger" onClick={()=>handleDelete(movie.id)} >Delete</Button><br /><br />
                       <Button variant="warning" onClick={()=>handleUpdate(movie.id,movie.comment)} >Update comment</Button>
    
                    </Card.Body>
              </Card>
                )
            })
        }
        </>
    )
}