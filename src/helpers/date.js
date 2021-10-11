import dayjs from "dayjs";

export const convertDate = (date, type) => dayjs(date[type] ?? date).locale('es').format('MMMM D, YYYY');

export const compareDate = (date) => {
    let diffFirst = dayjs(date.first).diff(dayjs(), 'day')
    let diffLast = dayjs(date.last).diff(dayjs(), 'day')

    return diffFirst > 0 ? diffFirst : diffLast;
}

export const compareDateGetDate = (date) => {
    let diffFirst = dayjs(date.first).diff(dayjs(), 'day')
    let diffLast = dayjs(date.last).diff(dayjs(), 'day')

    return diffFirst > 0 ? date.first : (diffLast > 0 ?  date.last : null);
}