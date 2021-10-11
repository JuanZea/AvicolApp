import dayjs from "dayjs";

export default class VaccineBehavior {
    FIRST = 0;
    LAST = 0;
    getDate = (date) => dayjs().add(date, 'day')
    first = () => this.getDate(this.FIRST);
    last = () => this.getDate(this.LAST);
}