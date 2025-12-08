import React from "react";
import EventsItem from "./EventsItem";

const EventList = (props) => {
    const { items } = props;
    return (
        <ul>
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
