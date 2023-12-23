import React from "react";
import { useDispatch } from "react-redux";
import { orderCards } from "../../../redux/actions/actions";
import styles from "./OrderByPopulation.module.css";


const OrderByPopulation = () => {
  const dispatch = useDispatch();

  const handleOrderByPopulation = (orderType) => {
    dispatch(orderCards(orderType));
  };

  return (
    <>
      <div className={styles.containerOrderByPopulation}>
        <select className={styles.orderOptionsPopulation} onChange={(e) => handleOrderByPopulation(e.target.value)}>
          <option value="default">Population </option>
          <option value="ascPopulation">  ⬇️Min  - ⬆️ Max </option>
          <option value="descPopulation"> ⬆️Max - ⬇️Min </option>
          <option value="randomPopulation"> 🔀 Random  </option>
        </select>
      </div>
    </>
  );
};

export default OrderByPopulation;