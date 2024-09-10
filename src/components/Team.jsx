import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import styles from './Team.module.css';

function Team() {
    const { teamID } = useParams();
    const { teams, players } = useContext(DataContext);

    if (!teams || !players) {
        return <h3>Loading...</h3>;
    }

    const team = teams.find((team) => team.ID === teamID);
    const teamPlayers = players.filter((player) => player.TeamID === teamID);
    const teamFlagPath = `/images/country-flags/${team.Name.toLowerCase()}.svg`

    return (
        <div className="container">
            <div className={styles.team}>
                <div className={styles.teamInner}>
                    <div className={styles.teamHeader}>
                        <div className={styles.teamHeaderContent}>
                            <h5 className={styles.teamGroup}>Group {team.Group}</h5>
                            <h1 className={styles.teamName}>{team.Name}</h1>
                            <h5 className={styles.managerName}>Manager: {team.ManagerFullName}</h5>
                        </div>
                        <div className={styles.countryFlag}>
                            <img src={teamFlagPath} alt="country-flag" />
                        </div>
                    </div>
                    <div className={styles.playersTableWrapper}>
                        <table className={styles.playersTable}>
                            <thead>
                                <tr className={styles.tableHeader}>
                                    <th>No</th>
                                    <th>Player</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamPlayers.map((player) => (
                                    <tr className={styles.tableRows} key={player.ID}>
                                        <td className={styles.playerNumber}>{player.TeamNumber}</td>
                                        <td className={styles.playerName}>{player.FullName}</td>
                                        <td className={styles.playerPosition}>
                                            <span className={styles.playerPositionBackground}>{player.Position}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
