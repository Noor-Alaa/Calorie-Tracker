import { useState } from "react";
import styles from "./ListingSection.module.css";
import RecordList from "./RecordList";
function ListingSection(props) {
  const { allRecords } = props;
  const [currentRecords, setCurrentRecords] = useState(new Date());
  const dateChangeHundler = (event) => {
    setCurrentRecords(new Date(event.target.value));
  };
  const dateFiltring = (record) =>
    record.date.getDate() === currentRecords.getDate() &&
    record.date.getMonth() === currentRecords.getMonth() &&
    record.date.getFullYear() === currentRecords.getFullYear();
  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="Listing-date">
        Select Date
      </label>
      <input
        type="date"
        id="Listing-date"
        className={styles["listing-picker-input"]}
        value={currentRecords.toISOString().split("T")[0]}
        onChange={dateChangeHundler}
      />
      <RecordList records={allRecords.filter(dateFiltring)} />
    </>
  );
}

export default ListingSection;
