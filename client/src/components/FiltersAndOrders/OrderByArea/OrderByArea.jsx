import React from "react";
import { useDispatch } from "react-redux";
import { orderCards } from "../../../redux/actions/actions";
import styles from "./OrderByArea.module.css";

const OrderByArea = () => {
  const dispatch = useDispatch();

  const handleOrderByArea = (orderType) => {
    dispatch(orderCards(orderType));
  };

  return (
    <>
      <div className={styles.containerOrderByArea}>
        <select className={styles.orderOptions} onChange={(e) => handleOrderByArea(e.target.value)}>
          <option value="default">Area</option>
          <option value="ascArea"> ⬇️Min  - ⬆️ Max </option>
          <option value="descArea"> ⬆️Max - ⬇️Min </option>
          <option value="randomArea"> 🔀 Random  </option>
        </select>
      </div>
    </>
  );
};

export default OrderByArea;
