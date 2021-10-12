import {ref} from "vue";
import {metricsService, settlementsService} from "../services";
import _ from "lodash";
import {compareDate, compareDateGetDate, convertDate} from "../helpers";
import dayjs from "dayjs";

const metrics = ref();
const vaccinesProximate = ref([]);

const refreshMetrics = async (force) => {
    if (!metrics.value || force) {
        metricsService.all()
            .then(response => {
                metrics.value = response;
                vaccinesProximate.value = [];
                _.forEach(metrics.value.lots, (lot) => {
                    lot.vaccinesPorcentage = 0;
                    if (lot.vaccines && lot.vaccines.length) {
                        let proxime = ref(100);
                        _.forEach(lot.vaccines, (vaccine) => {
                                if (vaccine.check) {
                                    vaccine.lot = lot.id;
                                    vaccine.barn = lot.Barn.name;
                                    vaccine.approxime = compareDate(vaccine.date);
                                    vaccine.approximeDate = convertDate(compareDateGetDate(vaccine.date));
                                    let diffFirst = dayjs(vaccine.date.first).diff(dayjs(), 'day')
                                    let diffLast = dayjs(vaccine.date.last).diff(dayjs(), 'day')

                                    lot.vaccinesPorcentage += (diffFirst + diffLast) === 0 ? 100 : diffFirst === 0 ? 50 : 0;
                                    proxime.value = vaccine.approxime < proxime.value ? vaccine.approxime : proxime.value;
                                    if (proxime.value > 0 && proxime.value <= 6) {
                                        vaccinesProximate.value.push(vaccine);
                                    }
                                }
                            }
                        );
                        lot.vaccinesPorcentage = (lot.vaccinesPorcentage / lot.vaccines.length) ?? 0;
                    }
                });
            }).catch(console.log);
    }
}

export default function useMetrics() {
    return {
        metrics,
        vaccinesProximate,
        refreshMetrics
    }
}