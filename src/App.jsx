import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Match from './pages/Match';
import Team from './pages/Team';
import Header from './components/Header';

function App() {
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/match' element={<Match />} />
                <Route path='/team' element={<Team />} />
            </Routes>
        </div>
    );
}

export default App;
