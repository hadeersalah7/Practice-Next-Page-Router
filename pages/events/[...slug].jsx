import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

export default function FilterPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    const filteredYear = filteredData?.[0];
    const filteredMonth = filteredData?.[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if (!filteredData) {
        return (
            <h3 className="center" style={{ color: "teal" }}>
                Loading...
            </h3>
        );
    }

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth > 12 ||
        numMonth < 1
    ) {
        return (
            <h3 className="center" style={{ color: "red" }}>
                Invalid Filter. Please Adjust Your Values!
            </h3>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <h3 className="center" style={{color: "red"}}>No Events Found For The Chosen filter!</h3>
    }
    return (
        <div>
            <h1>Filter Page </h1>
        </div>
    );
}
