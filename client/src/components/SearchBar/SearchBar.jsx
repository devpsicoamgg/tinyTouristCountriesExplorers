import styles from "./SearchBar.module.css";

//recibe las f() de busqeda y captura los eventos el input para llamar a handleChange para actaualizar stringsearch

const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <div className={styles.containerSearchBar}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="🔎 search for a country"
          onChange={(event) => handleChange(event)}
        />
        <button className={styles.searchBtn} type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
