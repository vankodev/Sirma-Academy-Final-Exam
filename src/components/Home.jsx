import { useState } from 'react';
import { useContext } from 'react';
import DataContext from '../contexts/dataContext';

import Brackets from './Brackets';
import GroupStage from './GroupStage';
import styles from './Home.module.css';

function Home() {
    const { matches } = useContext(DataContext);
    const [activeTab, setActiveTab] = useState('brackets');

    if (!matches) {
        return <h3 className='loading'>Loading...</h3>;
    }

    const cutoffDate = new Date('2024-06-26');
    const groupStageMatches = [];
    const bracketsMatches = [];

    matches.forEach((match) => {
        const matchDate = new Date(match.Date);
        if (matchDate <= cutoffDate) {
            groupStageMatches.push(match);
        } else {
            bracketsMatches.push(match);
        }
    });

    return (
        <div className='container'>
            <div className={styles.home}>
                <div className={styles.tabs}>
                    <div 
                        className={`
                            ${styles.tab} 
                            ${activeTab === 'brackets' ? styles.active : ''}
                        `}
                        onClick={() => setActiveTab('brackets')}
                    >
                        <span>Brackets</span>
                    </div>
                    <div 
                        className={`
                            ${styles.tab} 
                            ${activeTab === 'groupStage' ? styles.active : ''}
                        `}
                        onClick={() => setActiveTab('groupStage')}
                    >
                        <span>Group Stage</span>
                    </div>
                </div>
                <div className={styles.matches}>
                    {activeTab === 'brackets' ? (
                        <Brackets matches={bracketsMatches} />
                    ) : (
                        <GroupStage matches={groupStageMatches} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
