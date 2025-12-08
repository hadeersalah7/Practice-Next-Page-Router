import EventList from "../../Components/EventList";
import { getFeaturedEvents } from "../../dummy-data";

export default function AllEventsPage() {
    const events = getFeaturedEvents();
    return (
        <div>
            {events.map((event) => (
                <EventList items={event} />
            ))}
        </div>
    );
}
