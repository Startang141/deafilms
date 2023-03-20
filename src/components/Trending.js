import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import duneImages from '../assets/images/trending/dune.jpg'
import everyImages from '../assets/images/trending/everything.jpg'
import infiniteImages from '../assets/images/trending/infinite.jpg'
import jokerImages from '../assets/images/trending/joker.jpg'
import lightyearImages from '../assets/images/trending/lightyear.jpg'
import morbiusImages from '../assets/images/trending/morbius.jpg'

const Trending = () =>{
    return(
            <div>
        <Container>
            <br/>
            <br/>
            <h1 className='text-white' id='trending'>TRENDING</h1>
            <br/>
            <Row>
                {/* card one */}
                <Col  md={4}>
                <Card className="bg-dark text-white movieImage">
                <Image src={duneImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>DUNE</Card.Title>
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
                <Image src={everyImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>Everything</Card.Title>
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
                <Image src={infiniteImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>infinite</Card.Title>
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
                <Image src={jokerImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>Joker</Card.Title>
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
                <Image src={lightyearImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>lightyear</Card.Title>
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
                <Image src={morbiusImages} alt="Card image" className='images' />
                <div className='p-2'>
                <Card.Title className='text-center'>Morbius</Card.Title>
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

export default Trending;