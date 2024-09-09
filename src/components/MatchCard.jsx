import styles from './MatchCard.module.css';

function MatchCard() {
    return (
        <div className={styles.matchCard}>
            <div className={styles.inner}>
                <div className={styles.team}>
                    <div className={styles.countryFlag}>
                        <img src='/country-flags/germany.svg' alt='country-flag' />
                    </div>
                    <h4 className={styles.countryName}>Germany</h4>
                </div>
                <h3 className={styles.score}>2 : 1</h3>
                <div className={styles.team}>
                    <div className={styles.countryFlag}>
                        <img src='/country-flags/spain.svg' alt='country-flag' />
                    </div>
                    <h4 className={styles.countryName}>Spain</h4>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
