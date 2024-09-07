import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1>
                <Link className='home' to='/'>
                    Football Tournament
                </Link>
            </h1>
            <nav className='navigation'>
                <Link to='/match'>Match</Link>
                <Link to='/team'>Team</Link>
            </nav>
        </div>
    );
}

export default Header;
