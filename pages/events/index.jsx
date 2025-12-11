import { Fragment } from "react/jsx-runtime";
import EventList from "../../Components/events/EventList";
import EventsSearch from "../../Components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

export default function AllEventsPage() {
    const events = getAllEvents();
    return (
        <Fragment>
            <EventsSearch />
            {events.map((event) => (
                <EventList items={event} />
            ))}
        </Fragment>
    );
}
