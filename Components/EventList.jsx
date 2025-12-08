import EventsItem from "./EventsItem";
import classes from "./event-list.module.css"

const EventList = (props) => {
    const { items } = props;
    return (
        <ul className={classes.list}>
            <EventsItem
                title={items.title}
                key={items.id}
                id={items.id}
                image={items.image}
                date={items.image}
                location={items.location}
            />
        </ul>
    );
};

export default EventList;
