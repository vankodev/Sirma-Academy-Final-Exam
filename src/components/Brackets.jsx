import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import MatchCard from './MatchCard';

function Brackets() {
    const { matches } = useContext(DataContext);

    return (
        <div className='brackets'>
            <MatchCard />
            <h1>Parsed CSV Data</h1>
            <pre>{JSON.stringify(matches, null, 2)}</pre>
        </div>
    );
}

export default Brackets;
