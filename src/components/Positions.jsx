import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import styles from './Positions.module.css';

function Positions({ team }) {
    const navigate = useNavigate();
    const { players, records } = useContext(DataContext);

    const positions = { FW: [], MF: [], DF: [], GK: [] };
    const positionOrder = ['FW', 'MF', 'DF', 'GK'];

    const teamPlayers = players.filter((player) => player.TeamID === team.ID);
    const starters = teamPlayers.filter((player) =>
        records.find((record) => player.ID === record.PlayerID && record.fromMinutes === '0')
    );

    starters.forEach((player) => {
        positions[player.Position].push(player);
    });

    return (
        <div className={styles.positions}>
            <h3 className={styles.teamName}>{team.Name}</h3>

            <div className={styles.positionsContent} onClick={() => navigate(`/team/${team.ID}`)}>
                <img src='/images/positions.svg' alt='positions' />
                <div className={styles.rows}>
                    {positionOrder.map((positionKey) => (
                        <div key={positionKey} className={styles.row}>
                            {positions[positionKey].map((player) => (
                                <div key={player.ID} className={styles.playerDot}>
                                    <p className={styles.playerNumber}>{player.TeamNumber}</p>
                                    <p className={styles.playerInfo}>{player.FullName}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Positions;
