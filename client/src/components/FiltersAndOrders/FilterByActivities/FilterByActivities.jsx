import styles from "./FilterByActivities.module.css";



const FilterByActivities = () => {
  return (
    <div className={styles.containerFilterByActivities}>
      <select
        id="activityFilter"
        className={styles.selectByActivity}
      >
        <option value="">All Activities</option>
     
        
      </select>
    </div>
  );
};

export default FilterByActivities;
