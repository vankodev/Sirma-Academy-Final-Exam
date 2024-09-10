import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/dataContext';

import Home from './components/Home';
import Match from './components/Match';
import Team from './components/Team';
import Teams from './components/Teams';
import Header from './components/Header';

function App() {
    return (
        <DataProvider>
            <div className='app'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/match/:matchID' element={<Match />} />
                    <Route path='/teams' element={<Teams />} />
                    <Route path='/team/:teamID' element={<Team />} />
                </Routes>
            </div>
        </DataProvider>
    );
}

export default App;
