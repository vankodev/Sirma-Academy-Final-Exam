import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/dataContext';

import Home from './pages/Home';
import Match from './pages/Match';
import Team from './pages/Team';
import Header from './components/Header';

function App() {
    return (
        <DataProvider>
            <div className='app'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/match/:matchID' element={<Match />} />
                    <Route path='/team/:teamID' element={<Team />} />
                </Routes>
            </div>
        </DataProvider>
    );
}

export default App;
