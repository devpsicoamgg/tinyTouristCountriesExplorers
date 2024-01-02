import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editActivity, getActivities } from "../../redux/actions/actions";
import homeImg from "../../images/home.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../helpers/routesHelper";
import styles from "../EditForm/EditForm.module.css";
import imgEdit from "../../images/editingMap.png";

const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activitiesCreated = useSelector((state) => state.activitiesList);

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    description: "",
    country: "",
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleEdit = (activityDetails) => {
    setSelectedActivity(activityDetails);
    setUpdatedData({
      name: activityDetails.name,
      difficulty: activityDetails.difficulty.toString(),
      duration: activityDetails.duration.toString(),
      season: activityDetails.season,
      country: activityDetails.country,
      description: activityDetails.description,
    });
  };

  const handleNavigateToHome = () => navigate(ROUTES.HOME);

  const handleEditSubmit = () => {
    dispatch(editActivity(selectedActivity.id, updatedData));
    dispatch(getActivities());
    setSelectedActivity(null);
    setUpdatedData({
      name: "",
      difficulty: "",
      duration: "",
      country: "",
      season: "",
      description: "",
    });
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.divOne}>
          <table>
            <thead className={styles.tableHead}>
              <tr>
                <th>Country</th>
                <th>Activity Name</th>
                <th>Edit</th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {activitiesCreated.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.country}</td>
                  <td>{activity.name}</td>
                  <td>
                    <button
                      className={styles.editBTN}
                      onClick={() => handleEdit(activity)}
                    >
                      Edit ✍🏼
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.delBTN}
                      onClick={() => handleEdit(activity)}
                    >
                      Del 🗑️
                    </button>
                  </td>
                </tr> 
              ))}
            </tbody> 
            <tfoot className={styles.tableFoot}>
              <tr>
                <td colSpan="4">
                  <div className={styles.footerContent}>
                    <img
                      src={homeImg}
                      className={styles.homeLink}
                      alt="Home"
                      onClick={handleNavigateToHome}
                    />
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className={styles.divTwo}>
          <div className={styles.firstLine}>
            <label>Name:</label>
            <input
              className={styles.inputs}
              type="text"
              value={updatedData.name}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, name: e.target.value })
              }
            />
            <label>Difficulty:</label>
            <input
              className={styles.inputs}
              type="text"
              value={updatedData.difficulty}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  difficulty: e.target.value,
                })
              }
            />
          </div>

          <div className={styles.SecondLine}>
            <label>Duration:</label>
            <input
              type="text"
              className={styles.inputs}
              value={updatedData.duration}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  duration: e.target.value,
                })
              }
            />
            <label>Season:</label>
            <input
              type="text"
              value={updatedData.season}
              className={styles.inputs}
              onChange={(e) =>
                setUpdatedData({ ...updatedData, season: e.target.value })
              }
            />
          </div>

          <div className={styles.lasOneLine}>
            <label>Description:</label>
            <input
              type="text"
              value={updatedData.description}
              className={styles.inputs}
              onChange={(e) =>
                setUpdatedData({
                  ...updatedData,
                  description: e.target.value,
                })
              }
            />

            <label>Country:</label>
            <input
              type="text"
              value={updatedData.country}
              className={styles.disabledText}
              readOnly
            />
          </div>

          <div className={styles.sendBtnDiv}>
            <button className={styles.editBTNSend} onClick={handleEditSubmit}>
              Update
            </button>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img className={styles.imgForm} src={imgEdit} alt="Pick" />
        </div>
      </div>
    </>
  );
};

export default EditForm;
