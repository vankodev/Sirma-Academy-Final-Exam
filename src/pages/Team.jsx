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

    return (
        <div className='team'>
            <h1>{team.Name}</h1>;<h2>Group: {team.Group}</h2>
            <h4>Manager: {team.ManagerFullName}</h4>
            <table className={styles.playersTable}>
                <tr>
                    <th>Number</th>
                    <th>Player</th>
                    <th>Position</th>
                </tr>
                {teamPlayers.map((player) => (
                    <tr key={player.ID}>
                        <td>{player.TeamNumber}</td>
                        <td>{player.FullName}</td>
                        <td>{player.Position}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Team;
