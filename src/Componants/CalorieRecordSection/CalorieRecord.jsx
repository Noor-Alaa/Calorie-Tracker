import styles from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyleRecordCell from "../common/StyleRecordCell";
import { useState } from "react";
function CalorieRecord(props) {
  let nour = (
    <>
      {" "}
      <li>{props.meal}</li>
      <li>{props.content}</li>
    </>
  );

  if (props.calorie < 0) {
    nour = <li>invaild Calories</li>;
  }
  return (
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={props.date}></CalorieRecordDate>
      </li>
      {nour}
      <li className={styles["record-calories"]}>
        <StyleRecordCell>{props.calorie}</StyleRecordCell>
      </li>
    </ul>
  );
}
export default CalorieRecord;
