import EventList from "@/componets/events/EventList";
import EventsSearch from "@/componets/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { Fragment } from "react";

const AllEventsPage = () => {
  // 서버에게 요청을 보내고 받아온 데이터라고 생각하면 된다.
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
