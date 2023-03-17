import { Link } from "react-router-dom";

const Intro = () => {

  return (
    <Link to="/home" style={{ textDecoration: 'none' }}>
        <div className="App">
            <header className="App-header">
                <h1>Welcome to March Madness</h1>
                <small style={{fontStyle: 'italic'}}>Click anywhere to continue</small>
            </header>
        </div>
    </Link>
  );
}

export default Intro;