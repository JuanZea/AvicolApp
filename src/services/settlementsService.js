import {all, one, create, destroy} from "./avicolappAssembler";

const URL = import.meta.env.VITE_APP_URL_AV_API;

const settlementsService = {};

settlementsService.all = all(URL);
settlementsService.one = one(URL);
settlementsService.create = create(URL);
settlementsService.delete = destroy(URL);

export default settlementsService;