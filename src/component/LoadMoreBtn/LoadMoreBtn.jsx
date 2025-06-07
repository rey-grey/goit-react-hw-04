import styles from './LoadMoreBtn.module.css';


export const LoadMoreButton = ({ onClick, isLoading }) => {
    return (
      <div className={styles['load-more-wrapper']}>
        <button
          type="button"
          onClick={onClick}
          disabled={isLoading} 
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    );
  };
  


 