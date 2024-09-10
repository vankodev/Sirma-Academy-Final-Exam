import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import MatchCard from './MatchCard';
import styles from './Brackets.module.css';

function Brackets() {
    const { matches } = useContext(DataContext);

    if (!matches) {
        return <h3>Loading...</h3>;
    }

    const bracketsMatches = matches.filter((match) => {
        const matchDate = new Date(match.Date);
        const cutoffDate = new Date('2024-06-26');
        return matchDate > cutoffDate;
    });

    const getPrevMatches = (matches) => {
        const prevMatches = [];

        matches.forEach((match) => {
            let ATeamPrevMatch = null;
            let BTeamPrevMatch = null;

            for (let i = bracketsMatches.length - 1; i >= 0; i--) {
                const matchElement = bracketsMatches[i];

                if (
                    !ATeamPrevMatch &&
                    (match.ATeamID === matchElement.ATeamID ||
                    match.ATeamID === matchElement.BTeamID)
                ) {
                    ATeamPrevMatch = bracketsMatches.splice(i, 1)[0];
                    continue;
                }

                if (
                    !BTeamPrevMatch &&
                    (match.BTeamID === matchElement.ATeamID ||
                    match.BTeamID === matchElement.BTeamID)
                ) {
                    BTeamPrevMatch = bracketsMatches.splice(i, 1)[0];
                    continue;
                }

            }

            prevMatches.push(ATeamPrevMatch)
            prevMatches.push(BTeamPrevMatch)
        });

        return prevMatches;
    };

    const finalBracket = [bracketsMatches.pop()];
    const thirdBracket = getPrevMatches(finalBracket);
    const secondBracket = getPrevMatches(thirdBracket);
    const firstBracket = getPrevMatches(secondBracket); 

    const brackets = [firstBracket, secondBracket, thirdBracket, finalBracket];

    return (
        <div className={styles.brackets}>
            <div className={styles.bracketsContent}>
                {brackets.map((bracket, i) => (
                    <div className={styles.bracket} key={i}>
                        {bracket.map((match, j) => (
                            <MatchCard key={j} match={match} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brackets;
