export const getCurrentDateTime = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    // Get the time in the format "HH:mm"
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    return {
        date: formattedDate,
        time: formattedTime
    };
}



export const getOrdinal = (num) => {
    const ordinalSuffixes = ["th", "st", "nd", "rd"];
    const remainder = num % 100;
    return num + (ordinalSuffixes[(remainder - 20) % 10] || ordinalSuffixes[remainder] || ordinalSuffixes[0]);
};