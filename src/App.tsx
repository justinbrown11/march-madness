import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeContainer from './components/HomeContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Card from './components/Card';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Intro/>} />
        <Route path='/home' element={<HomeContainer/>} />
        <Route path='/card/:school/:mascot/:city/:state' element={<Card/>} />
      </Routes>
    </Router>
  );
}

export default App;
