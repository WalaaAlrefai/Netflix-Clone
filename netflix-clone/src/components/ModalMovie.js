import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useRef } from 'react';
export default function ModalMovie(props){
    const commentRef=useRef();
    function submitHandler(e){
        e.preventDefault();
        let userComment=commentRef.current.value;
        console.log("user comment is:",userComment)

        let newMovie={...props.movieData,userComment}
         console.log(newMovie);

         props.commentHandler(newMovie,newMovie.id)
    }
return(
    
<Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movieData.title}</Modal.Title>
        
        </Modal.Header>
        <img src={`${'https://www.themoviedb.org/t/p/w220_and_h330_face/'}${props.movieData.poster_path}`} alt={props.movieData.title}/>
        <Modal.Body>
            {props.movieData.comment? props.movieData.comment : "Noo comment added !!" }
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>comment</Form.Label>
        <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
        <Form.Text className="text-muted">
         enter your comment.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
        Submit
      </Button>
    </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
)

}

