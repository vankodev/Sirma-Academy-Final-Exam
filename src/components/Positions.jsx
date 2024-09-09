import { useNavigate } from "react-router-dom";
import styles from './Positions.module.css';

function Positions({ team }) {
    const navigate = useNavigate();

    console.log(team)

    return (
        <div className={styles.positions} onClick={() => navigate(`/team/${team.ID}`)}>
            <img src="/images/positions.svg" alt="positions" />        
        </div>
    );
}

export default Positions;
