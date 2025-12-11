import { Fragment } from "react/jsx-runtime";
import EventList from "../../Components/events/EventList";
import EventsSearch from "../../Components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();
    const handleFilterFunction = (year, month) => {
        const path = `/events/${year}/${month}`
        
        router.push(path)
}
    return (
    <Fragment>
            <EventsSearch onSubmit={handleFilterFunction} />
      {events.map((event) => (
        <EventList items={event} />
      ))}
    </Fragment>
  );
}
