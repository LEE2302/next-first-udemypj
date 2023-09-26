import Link from "next/link";
import styles from "./button.module.css";

// 재사용성을 위한 버튼ui

const Button = (props) => {
  // 프롭스에 링크가 있다면 링크 버튼으로 리턴
  if (props.link) {
    return (
      <Link href={props.link} className={styles.btn}>
        {props.children}
      </Link>
    );
  }

  // 링크가 없다면 일반 버튼으로 프롭으론 온클릭 함수를 받는다.
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
