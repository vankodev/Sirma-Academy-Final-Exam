import styles from './MatchCard.module.css';

function MatchCard() {
    return (
        <div className={styles.matchCard}>
            <div className={styles.team}>
                <div className={styles.countryFlag}>
                    <img src='/country-flags/germany.svg' alt='country-flag' />
                </div>
                <p className={styles.countryName}>Germany</p>
            </div>
            <div className={styles.score}>2 : 1</div>
            <div className={styles.team}>
                <div className={styles.countryFlag}>
                    <img src='/country-flags/spain.svg' alt='country-flag' />
                </div>
                <p className={styles.countryName}>Spain</p>
            </div>
        </div>
    );
}

export default MatchCard;
