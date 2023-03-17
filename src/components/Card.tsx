import { useParams } from 'react-router-dom';

const Card = () => {

    const { school, mascot, city, state } = useParams();

    return (
        <div>
            <p>{school}</p>
            <p>{mascot}</p>
            <p>{city}</p>
            <p>{state}</p>
        </div>
    );
}

export default Card;