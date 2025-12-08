import Link from "next/link";
import React from "react";

const EventsItem = (props) => {
    const { title, image, location, id, date } = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    const formattedAddress = location.replace(", ", '\n')
    return (
        <li key={id}>
            <img src={"/" + image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>{formattedAddress}
                    </div>
                </div>
                <div>
                    <Link href={`/events/${id}`}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
};

export default EventsItem;
