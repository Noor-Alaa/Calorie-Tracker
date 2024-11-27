import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";
function RecordList(props) {
  return (
    <ul className={styles["record-list"]}>
      {props.records.map(
        (record) =>
          record.calorie >= 0 && (
            <li className={styles["List-Item"]} key={record.id}>
              <CalorieRecord
                date={record.date}
                meal={record.meal}
                content={record.content}
                calorie={record.calorie}
              />
            </li>
          )
      )}
    </ul>
  );
}
export default RecordList;
