import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import antmanImages from '../assets/images/superhero/antman.jpg'
import avengerImages from '../assets/images/superhero/avenger.jpg'
import batmanImages from '../assets/images/superhero/batman.jpg'
import robinhoodImages from '../assets/images/superhero/robinhood.jpg'
import spidermanImages from '../assets/images/superhero/spiderman-cover.jpg'
import supermanImages from '../assets/images/superhero/superman.jpg'

const Superhero = () =>{
    return(
            <div>
        <Container>
            <br/>
            <br/>
            <h1 className='text-white'>SUPERHERO</h1>
            <br/>
            <Row>
                {/* card one */}
                <Col  md={4} id='trending'>
                <Card className="bg-dark text-white movieImage">
                <Image src={antmanImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>ANTMAN</Card.Title>
                <Card.Text>
                This is a wider card with supporting.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>
                {/* card one */}
                <Col  md={4}>
                <Card className="bg-dark text-white movieImage">
                <Image src={avengerImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>AVENGER</Card.Title>
                <Card.Text>
                This is a wider card with supporting.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>
                {/* card one */}
                <Col  md={4}>
                <Card className="bg-dark text-white movieImage">
                <Image src={batmanImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>BATMAN</Card.Title>
                <Card.Text>
                This is a wider card with supporting.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>
                {/* card one */}
                <Col  md={4}>
                <Card className="bg-dark text-white movieImage">
                <Image src={robinhoodImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>ROBINHOOD</Card.Title>
                <Card.Text>
                This is a wider card with supporting.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>
                {/* card one */}
                <Col  md={4}>
                <Card className="bg-dark text-white movieImage">
                <Image src={spidermanImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>SPIDERMAN</Card.Title>
                <Card.Text>
                This is a wider card with supporting.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>
                {/* card one */}
                <Col  md={4}>
                <Card className="bg-dark text-white movieImage">
                <Image src={supermanImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>SUPERMAN</Card.Title>
                <Card.Text>
                This is a wider card with supporting.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Superhero;