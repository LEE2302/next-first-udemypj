import { useRef } from "react";
import Button from "../ul/button";
import styles from "./events-search.module.css";

const EventsSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    // 부모에게 받은 프롭스(함수)를 사용하여 부모로 값 올리기(끌어올리기)
    // 부모 컴포넌트에서 네비게이팅을 위함
    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value={"1"}>1월</option>
            <option value={"2"}>2월</option>
            <option value={"3"}>3월</option>
            <option value={"4"}>4월</option>
            <option value={"5"}>5월</option>
            <option value={"6"}>6월</option>
            <option value={"7"}>7월</option>
            <option value={"8"}>8월</option>
            <option value={"9"}>9월</option>
            <option value={"10"}>10월</option>
            <option value={"11"}>11월</option>
            <option value={"12"}>12월</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
