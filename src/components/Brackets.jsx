import { useContext } from 'react';
import DataContext from '../contexts/dataContext';

function Brackets() {
    const { matches } = useContext(DataContext);

    return (
        <div className='brackets'>
            <h1>Parsed CSV Data</h1>
            <pre>{JSON.stringify(matches, null, 2)}</pre>
        </div>
    );
}

export default Brackets;
