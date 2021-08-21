import {all, one, create, destroy} from "./avicolappAssembler";

const URL = import.meta.env.VITE_APP_URL_AV_API;

const barnsService = {};

barnsService.all = all(URL);
barnsService.one = one(URL);
barnsService.create = create(URL);
barnsService.delete = destroy(URL);

export default barnsService;