import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import styles from './MatchCard.module.css';

function MatchCard({ match }) {
    const { teams } = useContext(DataContext);

    const teamA = teams.find(team => team.ID === match.ATeamID);
    const teamAFlagPath = `/country-flags/${teamA.Name.toLowerCase()}.svg`
    
    const teamB = teams.find(team => team.ID === match.BTeamID);
    const teamBFlagPath = `/country-flags/${teamB.Name.toLowerCase()}.svg`

    // const matchDate = match.Date.toLocaleDateString();
    
    return (
        <div className={styles.matchCard}>
            <div className={styles.inner}>
                <div className={styles.team}>
                    <div className={styles.countryFlag}>
                        <img src={teamAFlagPath} alt='country-flag' />
                    </div>
                    <h5 className={styles.countryName}>{teamA.Name}</h5>
                    {/* {matchDate} */}
                </div>

                <h4 className={styles.score}>{match.Score}</h4>

                <div className={styles.team}>
                    <div className={styles.countryFlag}>
                        <img src={teamBFlagPath} alt='country-flag' />
                    </div>
                    <h5 className={styles.countryName}>{teamB.Name}</h5>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
