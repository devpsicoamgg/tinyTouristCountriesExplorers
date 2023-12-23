import styles from "./FilterByActivities.module.css";
import { toPascalCase } from "../../../helpers/dataTransformation";

const FilterByActivities = ({ activitiesList, handleActivityChange }) => {
  console.log(activitiesList);

  const handleSelectChange = (event) => {
    const selectedActivity = event.target.value;
    handleActivityChange(selectedActivity);
  };
  console.log(activitiesList);
  return (
    <div className={styles.containerFilterByActivities}>
      <select
        id="activityFilter"
        className={styles.selectByActivity}
        onChange={handleSelectChange}
      >
        <option value="">All Activities</option>
        {activitiesList.map((activity) => (
          <option key={activity.id} value={activity.name}>
            {toPascalCase(activity.name)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByActivities;
