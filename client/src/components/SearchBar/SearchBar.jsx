import styles from "./SearchBar.module.css";



const SearchBar = () => {
  return (
    <div className={styles.containerSearchBar}>
      <form >
        <input
          type="text"
          placeholder="🔎 search for a country"
          
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
