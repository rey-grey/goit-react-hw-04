import styles from './Loader.module.css';


export const Loader = () => {
    return (
      <div className={styles['loader-wrapper']}>
        <div className={styles.spinner} />
      </div>
    );
  };
  