import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import styles from './MatchCard.module.css';

function MatchCard({ match }) {
    const { teams } = useContext(DataContext);

    const teamA = teams.find(team => team.ID === match.ATeamID); // Assuming CSV header for ID is 'ID'
    const teamAFlagPath = `/country-flags/${teamA.Name.toLowerCase()}.svg`
    
    const teamB = teams.find(team => team.ID === match.BTeamID);
    const teamBFlagPath = `/country-flags/${teamB.Name.toLowerCase()}.svg`

    return (
        <div className={styles.matchCard}>
            <div className={styles.inner}>
                <div className={styles.team}>
                    <div className={styles.countryFlag}>
                        <img src={teamAFlagPath} alt='country-flag' />
                    </div>
                    <h4 className={styles.countryName}>{teamA.Name}</h4>
                </div>

                <h3 className={styles.score}>{match.Score}</h3>

                <div className={styles.team}>
                    <div className={styles.countryFlag}>
                        <img src={teamBFlagPath} alt='country-flag' />
                    </div>
                    <h4 className={styles.countryName}>{teamB.Name}</h4>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
