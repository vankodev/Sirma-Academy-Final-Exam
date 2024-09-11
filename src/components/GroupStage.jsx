import React from 'react';
import MatchCard from './MatchCard';
import styles from './GroupStage.module.css';

function GroupStage({ matches }) {
    const matchesByDate = matches.reduce((acc, match) => {
        const date = new Date(match.Date).toLocaleDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(match);
        return acc;
    }, {});

    return (
        <div className='container'>
            <div className={styles.groupStage}>
                {Object.entries(matchesByDate).map(([date, dateMatches]) => (
                    <React.Fragment key={date}>
                        <h4 className={styles.date}>{date}</h4>
                        <div className={styles.matches}>
                            {dateMatches.map((match) => (
                                <MatchCard key={match.ID} match={match} />
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default GroupStage;
