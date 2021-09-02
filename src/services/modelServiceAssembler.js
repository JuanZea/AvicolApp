import {all, one, create, destroy, update} from "./avicolappAssembler";

const assembler = (url) => {
    const model = {};
    model.all = all(url);
    model.one = one(url);
    model.create = create(url);
    model.delete = destroy(url);
    model.update = update(url);
    return model;
};

export const usersService = assembler('users');
export const settlementsService = assembler('settlements');
export const barnsService = assembler('barns');
export const lotsService = assembler('lots');