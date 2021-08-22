import {all, one, create, destroy} from "./avicolappAssembler";

const URL = import.meta.env.VITE_APP_URL_AV_API;

const lotsService = {};

lotsService.all = all(URL);
lotsService.one = one(URL);
lotsService.create = create(URL);
lotsService.delete = destroy(URL);

export default lotsService;