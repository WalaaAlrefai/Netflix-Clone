import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from './ModalMovie'
export default function Movie(props){
    console.log(11111111111,props.movie)
    return(
          <Card style={{width:"20rem"}}>
                <Card.Img varient='top' src={props.movie.poster_path}/>
                <Card.Body>
                   <Card.Title>{props.movie.title}</Card.Title>
                   <Card.Text>{props.movie.release_date}</Card.Text>
                   <Button varient='primary'>add to the favorite list</Button>

                </Card.Body>
          </Card>    
    )
}