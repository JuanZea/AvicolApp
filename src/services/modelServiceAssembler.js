import {all, one, create, destroy, update} from "./avicolappAssembler";

export const assembler = (url) => {
    const model = {};
    model.all = all(url);
    model.one = one(url);
    model.create = create(url);
    model.update = update(url);
    model.delete = destroy(url);
    return model;
};

export const barnsService = assembler('barns');
export const lotsService = assembler('lots');