import Brackets from '../components/Brackets';
// import GroupStage from '../components/GroupStage';
import styles from './Home.module.css';

function Home() {
    return (
        <div className='container'>
            <div className={styles.home}>
                <Brackets />
                {/* <GroupStage /> */}
            </div>
        </div>
    );
}

export default Home;
