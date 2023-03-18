import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import { Button, Card as BootstrapCard } from 'react-bootstrap';

const Card = () => {

    const { school, mascot, city, state } = useParams();

    return (
        <div className='Home-container'>

            <Header/>

            <br/>

            <BootstrapCard bg='dark' border='info' className='App'>
                <BootstrapCard.Body>
                    <BootstrapCard.Title>{school} {mascot}</BootstrapCard.Title>
                    <BootstrapCard.Subtitle>{city}, {state}</BootstrapCard.Subtitle>
                </BootstrapCard.Body>
            </BootstrapCard><br/><br/>

            <Link to='/home' style={{ textDecoration: 'none' }}>
                <Button variant='primary'>Return Home</Button>
            </Link>

        </div>
    );
}

export default Card;