import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../contexts/dataContext';
import styles from './Teams.module.css';

function Teams() {
    const navigate = useNavigate();
    const { teams } = useContext(DataContext);

    if (!teams) {
        return <h3 className='loading'>Loading...</h3>;
    }

    return (
        <div className='container'>
            <div className={styles.teams}>
                <div className={styles.teamsInner}>
                    <div className={styles.teamsTableWrapper}>
                        <table className={styles.teamsTable}>
                            <thead>
                                <tr className={styles.tableHeader}>
                                    <th>Team</th>
                                    <th>Manager</th>
                                    <th>Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map((team) => (
                                    <tr
                                        className={styles.tableRows}
                                        key={team.ID}
                                        onClick={() => navigate(`/team/${team.ID}`)}
                                    >
                                        <td className={styles.name}>
                                            <img
                                                src={`/images/country-flags/${team.Name.toLowerCase()}.svg`}
                                                alt='country-flag'
                                            />
                                            <span>{team.Name}</span>
                                        </td>
                                        <td className={styles.manager}>{team.ManagerFullName}</td>
                                        <td className={styles.group}>{team.Group}</td>
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

export default Teams;
