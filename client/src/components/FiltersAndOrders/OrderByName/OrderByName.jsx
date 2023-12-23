import React from "react";
import { useDispatch } from "react-redux";
import { orderCards } from "../../../redux/actions/actions";
import styles from "./OrderByName.module.css";


const OrderByName = () => {
  const dispatch = useDispatch();

  const handleOrderByName = (orderType) => {
    dispatch(orderCards(orderType));
  };

  return (
    <>
      <div className={styles.containerOrderByName}>
        <select className={styles.orderOptionsName} onChange={(e) => handleOrderByName(e.target.value)}>
          <option value="default">Name</option>
          <option value="ascName"> A - Z </option>
          <option value="descName"> Z - A </option>
          <option value="randomName"> 🔀 Random  </option>
        </select>
      </div>
    </>
  );
};

export default OrderByName;