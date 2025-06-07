import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ message = "Something went wrong. Please try again later." }) => {
    return (
      <div className={styles['error-message']}>
        <p>{message}</p>
      </div>
    );
  };
  