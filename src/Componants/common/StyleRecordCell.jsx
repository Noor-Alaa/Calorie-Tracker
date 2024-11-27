import styles from "./StyleRecordCell.module.css";
function StyleRecordCell(props) {
  return <div className={styles["Style-record-cell"]}>{props.children}</div>;
}
export default StyleRecordCell;
