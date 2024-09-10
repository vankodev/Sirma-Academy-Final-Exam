import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <Link className={styles.logo} to='/'>
                <img src='/images/logo.svg' alt='logo' />
            </Link>
            <nav>
                <Link to='/'>Matches</Link>
                <Link to='/teams'>Teams</Link>
            </nav>
        </div>
    );
}

export default Header;
