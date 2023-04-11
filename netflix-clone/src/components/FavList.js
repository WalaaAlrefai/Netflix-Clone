import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from "react";
import { useRef } from 'react';

export default function FavList(){

    const commentRef=useRef();


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

async function handleUpdate(id){

    let url = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
    let userComment = commentRef.current.value;
    let response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({comment: userComment}),
    })
    getFavorite();









    
    
    // let url=`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`

    // let data={
    //     comment:favoriteMovie.comment
    // }
    // const response = await fetch(url,{
    //     method:"PUT", 
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: data,
    // })
    // // const recivedData = await response.json();
    // // console.log(recivedData)
    // if(response.send ==="updated"){
    //     // getFavorite();
    //     alert ("successfuly Updated !!");
    // }
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
                       <Form>

                       <Form.Group className="mb-3" >
                                            {movie.comment ? movie.comment : "No comment Added "}
                                            <br></br>
                                            <Form.Control id="textarea" ref={commentRef} as="textarea" rows={1} placeholder="Update your comment" />
                        </Form.Group>
                       </Form>
                       
                       <Button variant="danger" onClick={()=>handleDelete(movie.id)} >Delete</Button><br /><br />
                       <Button variant="warning" onClick={()=>handleUpdate(movie.id)} >Update comment</Button>
    
                    </Card.Body>
              </Card>
                )
            })
        }
        </>
    )
}