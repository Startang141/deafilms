import {Col, Row, Container,Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
                <Col className="tittle">
                <div>NONTON GRATIS</div>
                <div>GAK PAKEK KARCIS</div>
                <div className="introButton mt-4 text-center ">
                    <Button variant="dark">Lihat Semua List</Button>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Intro