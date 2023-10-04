import EventList from "@/componets/events/EventList";
import { getFeaturedEvents } from "@/helpers/api-util";

const HomePage = (props) => {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents)

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
