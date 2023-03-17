import teams from '../data/CollegeBasketballTeams';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const CardList = () => {

    return (
        <div>
            <Row xs={1} md={2} lg={4} className="g-6">
            {teams.teams.map(t => (
                <Col>
                    <Link to={`/card/${t.school}/${t.name}/${t.city}/${t.state}`} style={{ textDecoration: 'none', textDecorationColor: 'white' }}>
                        <Card bg='dark' border='info' className='App'>
                            <Card.Body>
                                <Card.Title>{t.school}</Card.Title>
                            </Card.Body>
                        </Card><br/>
                    </Link>
                </Col>
            ))}
            </Row>
        </div>
    );
}

export default CardList;