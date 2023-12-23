import styles from "./FilterByActivities.module.css";



const FilterByActivities = ({ activitiesList }) => {
  console.log(activitiesList)
  return (
    <div className={styles.containerFilterByActivities}>
      <select id="activityFilter" className={styles.selectByActivity}>
        <option value="">All Activities</option>
        {activitiesList.map((activity) => (
          <option key={activity.id} value={activity.name}>
            {activity.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByActivities;
