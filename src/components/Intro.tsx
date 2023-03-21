import { Link } from "react-router-dom";
import { IoIosBasketball } from 'react-icons/io';

const Intro = () => {

  return (
    <Link to="/home" style={{ textDecoration: 'none' }}>
        <div className="App">
            <header className="App-header">
              <IoIosBasketball size={150}/>
                <h1>Welcome to March Madness</h1>
                <small style={{fontStyle: 'italic'}}>Click anywhere to continue</small>
            </header>
        </div>
    </Link>
  );
}

export default Intro;