import {assembler} from "./modelServiceAssembler";
import {first} from "./avicolappAssembler";

const URL = 'settlements'

const settlementsService = assembler(URL);
settlementsService.first = first(URL);

export default settlementsService;