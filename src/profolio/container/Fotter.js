import React from 'react'
import{Container, Row, Col} from 'react-bootstrap'


const Fotter = () => {
    return (
        <footer>
        <Container>
        <Row>
        <Col className= "text-center py-3">
        Copyright &copy;Myworld
        </Col> 
        </Row>
        </Container>
        </footer>
    )
}

export default Fotter
