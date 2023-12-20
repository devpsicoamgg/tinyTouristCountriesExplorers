import styles from "./FilterByContinent.module.css";


const FilterByContinent = () => {

    

  return (
    <div className={styles.containerFilterByContinent}>
      <select
        id="continentFilter"
        className={styles.selectByContinent}
      >
        <option value="">All Continents</option>
    
      </select>
    </div>
  );
};

export default FilterByContinent;
