import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import MatchCard from './MatchCard';

function Brackets() {
    const { matches } = useContext(DataContext);

    const bracketsMatches = matches ? matches.filter(match => {
        const matchDate = new Date(match.Date);
        const cutoffDate = new Date('2024-06-26');
        return matchDate > cutoffDate;
    }) : [];

    const firstBracketMatches = bracketsMatches.slice(0, 8); 

    return (
        <div className='brackets'>
            <h1>Brackets</h1>
            {firstBracketMatches.map((match, index) => (
                <MatchCard key={index} match={match} />
            ))}
        </div>
    );
}

export default Brackets;
