import React from "react";
import { toPascalCase } from "../../../helpers/dataTransformation";
import styles from "./FilterByActivities.module.css";

const FilterByActivities = ({ activitiesList, handleActivityChange }) => {
  const uniqueActivities = new Set(activitiesList.map((activity) => activity.name));

  const handleSelectChange = (event) => {
    const selectedActivity = event.target.value;
    handleActivityChange(selectedActivity);
  };

  return (
    <div className={styles.containerFilterByActivities}>
      <select
        id="activityFilter"
        className={styles.selectByActivity}
        onChange={handleSelectChange}
      >
        <option value="">All Activities</option>
        {[...uniqueActivities].map((activityName) => (
          <option key={activityName} value={activityName}>
            {toPascalCase(activityName)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByActivities;
