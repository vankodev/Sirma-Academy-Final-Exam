import MatchCard from './MatchCard';
import styles from './Brackets.module.css';

function Brackets({ matches }) {

    const getPrevMatches = (lastMatches) => {
        const prevMatches = [];

        lastMatches.forEach((match) => {
            let ATeamPrevMatch = null;
            let BTeamPrevMatch = null;

            for (let i = matches.length - 1; i >= 0; i--) {
                const matchElement = matches[i];

                if (
                    !ATeamPrevMatch &&
                    (match.ATeamID === matchElement.ATeamID ||
                    match.ATeamID === matchElement.BTeamID)
                ) {
                    ATeamPrevMatch = matches.splice(i, 1)[0];
                    continue;
                }

                if (
                    !BTeamPrevMatch &&
                    (match.BTeamID === matchElement.ATeamID ||
                    match.BTeamID === matchElement.BTeamID)
                ) {
                    BTeamPrevMatch = matches.splice(i, 1)[0];
                    continue;
                }

            }

            prevMatches.push(ATeamPrevMatch)
            prevMatches.push(BTeamPrevMatch)
        });

        return prevMatches;
    };

    const finalBracket = [matches.pop()];
    const thirdBracket = getPrevMatches(finalBracket);
    const secondBracket = getPrevMatches(thirdBracket);
    const firstBracket = getPrevMatches(secondBracket); 

    const brackets = [firstBracket, secondBracket, thirdBracket, finalBracket];

    return (
        <div className={styles.brackets}>
            <div className={styles.bracketsHeader}>
                <h4>Round of 16</h4>
                <h4>Quarter-Finals</h4>
                <h4>Semi-Finals</h4>
                <h4>Final</h4>
            </div>
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
