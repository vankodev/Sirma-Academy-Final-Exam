import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import styles from './Match.module.css';

import MatchCard from './MatchCard';
import Positions from './Positions';

function Match() {
    const { matchID } = useParams();
    const { matches, teams } = useContext(DataContext);

    if (!matches || !teams) {
        return <h3>Loading...</h3>;
    }

    const match = matches.find((match) => match.ID === matchID);
    
    if (!match) {
        return <h3>Match not found!</h3>;
    }

    const aTeam = teams.find(team => team.ID === match.ATeamID);
    const bTeam = teams.find(team => team.ID === match.BTeamID);

    return (
        <div className="container">
            <div className={styles.match}>
                <div className={styles.card}>
                    <MatchCard match={match} />
                </div>
                <div className={styles.positions}>
                    <Positions team={aTeam} />
                    <Positions team={bTeam} />
                </div>
            </div>
        </div>
    );
}

export default Match;
