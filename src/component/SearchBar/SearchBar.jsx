import { toast, Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
      const query = form.elements.query.value;
      
      // console.log('Submitted query:', query);

        if (query.trim() === '') {
          toast.error('Please enter a search query.');
            return;
        } else if (query.length < 3) {
            toast.error('Please enter at least 3 characters.');
            return;
        } 
        onSubmit(query);
        form.reset();
    };
    return (
        <>
        <header>
        <form onSubmit={handleSubmit}> 
          <input className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
        </>

    )
}
export default SearchBar;
