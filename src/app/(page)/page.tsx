import type { HomeFn } from './types';
import styles from './index.module.css';

const Home: HomeFn = () => {
  return <h1 className={styles.container}>Welcome to Three.js with Next.js!</h1>;
};

export default Home;
