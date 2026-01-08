import type { HomeFn } from './types';
import styles from './index.module.css';

const Home: HomeFn = () => {
  return (
    <h1 className={styles.container} key="2" onClick={() => {}} id="4">
      Home Page
    </h1>
  );
};

export default Home;
