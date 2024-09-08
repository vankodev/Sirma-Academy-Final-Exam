
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Match from './pages/Match';
import Team from './pages/Team';
import Header from './components/Header';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/teams.csv')
            .then((response) => response.text())
            .then((text) => {
                const parsedData = parseCSV(text);
                setData(parsedData);
            });
    }, []);

    const parseCSV = (csvText) => {
        const lines = csvText.trim().split(/\r?\n/);
        const headers = lines[0].split(',');
    
        const data = lines.slice(1).map((line) => {
            const values = line.split(',');
            const obj = {};
    
            headers.forEach((header, index) => {
                obj[header] = values[index].trim();
            });
            
            return obj;
        });
    
        return data;
    };
    

    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/match' element={<Match />} />
                <Route path='/team' element={<Team />} />
            </Routes>

            <h1>Parsed CSV Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
