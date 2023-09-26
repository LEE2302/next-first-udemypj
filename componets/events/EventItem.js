// css 모듈을 활용하여 컴포넌트에 css효과주기
// styles혹은 classes를 주어야한다. 객체로 값이 들어옴
import styles from "./EventItem.module.css";
import Button from "../ul/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ props }) => {
  // 프롭으로 받아오는 데이터를 구조분해 할당
  const { title, image, date, location, id } = props;

  // 데이트 날짜 수정
  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // 주소 부분도 ,를 \n으로 수정
  const formattedAddress = location.replace(",", "\n");

  // 링크 주소 변수에 저장
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Evnet</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
