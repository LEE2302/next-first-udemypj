import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilterdEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  // 이 조건문은 처음 리액트 렌더링시 처음은 언디파인드가 나와서 로딩을 보여주는 조건로직이다.
  if (!filterData) {
    // 여기 클래스네임은 글로벌css에 있는 css이다.
    return <p className="center">Loding...</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  // 유효성 조건문
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>유효하지 않은 필터입니다. 유효한 값을 입력하세요!</p>;
  }

  // 서버에서 값을 받은걸로 다시 조건문을 걸어 유효성 검사를 한다.
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>유효한 이벤트가 없습니다. 다시 입력해주세요</p>;
  }
  return (
    <div>
      <h1>필터 이벤트</h1>
    </div>
  );
};

export default FilterdEventsPage;
