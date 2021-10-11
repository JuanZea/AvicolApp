import {ref} from "vue";
import {metricsService} from "../services";
import _ from "lodash";
import {compareDate, compareDateGetDate, convertDate} from "../helpers";

const metrics = ref();
const vaccinesProximate = ref([]);

const refreshMetrics = () => {
    metricsService.all()
        .then(response => {
            metrics.value = response;

            _.forEach(metrics.value.lots, (lot) => {
                if (lot.vaccines && lot.vaccines.length) {
                    let proxime = ref(100);
                    _.forEach(lot.vaccines, (vaccine) => {
                        if(vaccine.check) {
                            vaccine.lot = compareDate(lot.id);
                            vaccine.barn = compareDate(lot.barn_id);
                            vaccine.approxime = compareDate(vaccine.date);
                            vaccine.approximeDate = convertDate(compareDateGetDate(vaccine.date));
                            proxime.value = vaccine.approxime < proxime.value ? vaccine.approxime : proxime.value;
                            if (proxime.value > 0 && proxime.value <= 6) {
                                vaccinesProximate.value.push(vaccine);
                            }
                        }
                    });
                }
            });
        }).catch(console.log);
}

export default function useMetrics() {
    return {
        metrics,
        vaccinesProximate,
        refreshMetrics
    }
}