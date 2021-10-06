import {all} from "./avicolappAssembler";

const URL = 'metrics'

const metricsService = {};
metricsService.all = all(URL);

export default metricsService;