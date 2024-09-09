import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import MatchCard from './MatchCard';

function Brackets() {
    const { matches } = useContext(DataContext);

    return (
        <div className='brackets'>
            <h1>Brackets</h1>
            <MatchCard />
            {/* <pre>{JSON.stringify(matches, null, 2)}</pre> */}
        </div>
    );
}

export default Brackets;
