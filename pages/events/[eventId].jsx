import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data"
import { Fragment } from "react/jsx-runtime"
import EventSummary from './../../Components/event-detail/event-summary';
import EventLogistics from './../../Components/event-detail/event-logistics';
import EventContent from './../../Components/event-detail/event-content';

export default function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId)

    if(!event) return <h2>No such page found! O_O</h2>
    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent >
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}