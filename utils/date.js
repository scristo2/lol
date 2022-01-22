
const getDate = () => {


    const dateTime = new Date(),
        Day = dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate(),
        Month = (dateTime.getMonth() + 1) < 10 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1,
        Year = dateTime.getFullYear(),
        Hour = dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours(),
        Minute = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes(),
        Seconds = dateTime.getSeconds() < 10 ? `0${dateTime.getSeconds()}` : dateTime.getSeconds()

    return {

        day: Day,
        month : Month,
        year : Year,
        hour : Hour,
        minute : Minute,
        second : Seconds,
        complete : `${Day}/${Month}/${Year} ${Hour}:${Minute}:${Seconds}`

    }
}


export { getDate };