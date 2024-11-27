import { useState } from "react";
import CalorieRecord from "./Componants/CalorieRecordSection/CalorieRecord";
import RecordList from "./Componants/CalorieRecordSection/RecordList";
import CalorieRecordEdit from "./Componants/edit/CalorieRecordEdit";
import ListingSection from "./Componants/CalorieRecordSection/ListingSection";
import Modal from "react-modal";
import styles from "./App.module.css";

const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(2000, 11, 9),
    meal: "BreakFast",
    content: "Dounts",
    calorie: 120,
  },
  {
    id: 2,
    date: new Date(2000, 11, 8),
    meal: "Dinner",
    content: "Meat",
    calorie: 500,
  },

  {
    id: 3,
    date: new Date(2000, 11, 7),
    meal: "Lunch",
    content: "Bread",
    calorie: 148,
  },
  {
    id: 4,
    date: new Date(2000, 11, 6),
    meal: "Snaks",
    content: "Chocolate",
    calorie: 750,
  },
];

function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextId, setNextId] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding: "0px",
      borderRadius: "var(--theme-border-radius-smooth)",
    },

    overlay: {
      backgroundColor: "rgb(0,0,0,0.5)",
    },
  };
  const formSubmitHundler = (record) => {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextId,
    };
    setNextId((lastVal) => lastVal + 1);
    setRecords((previousRecords) => [formattedRecord, ...previousRecords]);
  };
  return (
    <>
      <h1 className={styles.title}>Calorie Tracker</h1>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} // Close modal on escape key or clicking outside
        contentLabel="Modal"
        style={modalStyles}
      >
        <CalorieRecordEdit onFormSubmit={formSubmitHundler} />
      </Modal>
      <ListingSection allRecords={records} />
      <button className={styles["open-modal-button"]} onClick={openModal}>
        Track Food
      </button>
    </>
  );
}

export default App;
