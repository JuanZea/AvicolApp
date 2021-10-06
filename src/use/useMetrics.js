import {ref} from "vue";
import {metricsService} from "../services";

const metrics = ref();

const refreshMetrics = () => {
    metricsService.all()
        .then(response => {
            metrics.value = response;
        }).catch(console.log);
}

export default function useMetrics() {
    return {
        metrics,
        refreshMetrics
    }
}