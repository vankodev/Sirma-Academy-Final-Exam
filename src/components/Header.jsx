import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link className={styles.home} to='/'>
                    Football Tournament
                </Link>
            </div>
            {/* <nav className={styles.navigation}>
                <Link to='/match'>Match</Link>
                <Link to='/team'>Team</Link>
            </nav> */}
        </div>
    );
}

export default Header;
