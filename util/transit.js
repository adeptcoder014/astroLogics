const dates = [
    "2024-06-03",
    "2024-06-05",
    "2024-06-07",
    "2024-06-09",
    "2024-06-11",
    "2024-06-14",
    "2024-06-17",
    "2024-06-19",
    "2024-06-21",
    "2024-06-23",
    "2024-06-26"
];

// Function to parse date strings into Date objects
const parseDates = dateStrings => dateStrings.map(dateStr => new Date(dateStr));

// Function to find dates within a 3-day interval
const findDatesWithinInterval = (dates, interval = 3) => {
    const intervalDates = [];
    for (let i = 0; i < dates.length; i++) {
        const currentDate = dates[i];
        const startInterval = new Date(currentDate);
        startInterval.setDate(currentDate.getDate() - interval);
        const endInterval = new Date(currentDate);
        endInterval.setDate(currentDate.getDate() + interval);

        const datesInRange = dates.filter(date => 
            date > startInterval && date < endInterval && date !== currentDate
        );

        if (datesInRange.length > 0) {
            intervalDates.push({
                originalDate: currentDate,
                datesInRange
            });
        }
    }
    return intervalDates;
};

// Parse the dates and find dates within the interval
const parsedDates = parseDates(dates);
const intervalDates = findDatesWithinInterval(parsedDates);

// Format the output
const formattedOutput = intervalDates.map(entry => {
    const originalDate = entry.originalDate.toISOString().split('T')[0];
    const datesInRange = entry.datesInRange.map(date => date.toISOString().split('T')[0]);
    return { originalDate, datesInRange };
});

// Display the output
formattedOutput.forEach(entry => {
    console.log(`Original Date: ${entry.originalDate}, Dates in Range: ${entry.datesInRange.join(', ')}`);
});
