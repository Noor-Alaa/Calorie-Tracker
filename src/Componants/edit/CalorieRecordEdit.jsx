import { useState } from "react";
import styles from "./CalorieRecordEdit.module.css";
import ClickCounter from "./ClickCounter";
function CalorieRecordEdit(props) {
  const [dateValue, setDateValue] = useState();
  const [mealValue, setMealValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [caloriesValue, setCaloriesValue] = useState();
  const [clickCounter, setClickCounter] = useState(0);
  const DEFAULT_VALUE = {
    date: "",
    meal: "",
    content: "",
    calorie: 0,
  };
  const [mealReord, setMealRecord] = useState(DEFAULT_VALUE);
  const onChangeDateValue = (event) => {
    setMealRecord({
      ...mealReord,
      date: event.target.value,
    });
  };
  const onChangeMealValue = (event) => {
    setMealRecord({
      ...mealReord,
      meal: event.target.value,
    });
  };
  const onChangeContentValue = (event) => {
    setMealRecord({
      ...mealReord,
      content: event.target.value,
    });
  };
  const onChangeCaloriesValue = (event) => {
    setMealRecord({
      ...mealReord,
      calorie: event.target.value,
    });
  };
  const onSubmitHundler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealReord);
    setMealRecord(DEFAULT_VALUE);
  };

  // let changeStyleCalorie = {};
  // if () {
  //   changeStyleCalorie = {

  //   };
  // }
  return (
    <form className={styles.form} onSubmit={onSubmitHundler}>
      {/* <div>
        <label htmlFor="">when Click on button more 1 : {clickCounter}</label>
      </div> */}
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={mealReord.date}
        onChange={onChangeDateValue}
      />
      <label htmlFor="meal">Meal</label>
      <select
        name="Meal"
        id="meal"
        value={mealReord.meal}
        onChange={onChangeMealValue}
      >
        <option value="Breakfast">BreakFast</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Snaks">Snaks</option>
      </select>
      <label htmlFor="conten">Content</label>
      <input
        type="text"
        id="content"
        value={mealReord.content}
        onChange={onChangeContentValue}
      />
      <label htmlFor="calorie">Calories</label>
      <input
        // className="calories-input"
        type="number"
        id="calorie"
        value={mealReord.calorie}
        onChange={onChangeCaloriesValue}
        // style={
        //   mealReord.calorie < 0
        //     ? { border: "1px solid red", background: "white", color: "red" }
        //     : {}
        // }
        className={`${styles["calories-input"]} ${
          mealReord.calorie < 0 ? styles.error : ""
        }`}
      />
      <div className={styles.footer}>
        <button>Add Record</button>
        {/* <ClickCounter setClickCounter={setClickCounter} /> */}
      </div>
    </form>
  );
}

export default CalorieRecordEdit;
