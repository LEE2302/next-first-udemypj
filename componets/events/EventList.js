import EventItem from "./EventItem";

import styles from "./EventList.module.css";

const EventList = ({ items }) => {
  // const EventList = ({props}) => {
  //   const { items } = props;
  console.log(items)

  return (
    <ul className={styles.list}>
      {items.map((el) => (
        <EventItem key={el.id} props={...el} />
      ))}
    </ul>
  );
};

export default EventList;
