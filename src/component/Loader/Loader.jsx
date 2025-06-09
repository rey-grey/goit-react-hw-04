import styles from './Loader.module.css';


const Loader = () => {
    return (
      <div className={styles['loader-wrapper']}>
        <div className={styles.spinner} />
      </div>
    );
  };
export default Loader;