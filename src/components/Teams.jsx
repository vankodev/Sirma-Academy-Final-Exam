import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import DataContext from '../contexts/dataContext';
import styles from './Teams.module.css';

function Teams() {
    const navigate = useNavigate();
    const { teams } = useContext(DataContext);

    if (!teams) {
        return <h3>Loading...</h3>;
    }

    return (
        <div className="container">
            <div className={styles.teams}>
                <table className={styles.playersTable}>
                    <thead>
                        <tr className={styles.tableHeader}>
                            <th>Group</th>
                            <th>Team</th>
                            <th>Manager</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team) => (
                            <tr className={styles.team} key={team.ID} onClick={() => navigate(`/team/${team.ID}`)}>
                                <td className={styles.group}>{team.Group}</td>
                                <td className={styles.name}>{team.Name}</td>
                                <td className={styles.manager}>{team.ManagerFullName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Teams;
