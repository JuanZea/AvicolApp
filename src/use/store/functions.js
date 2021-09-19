import state from "./state";
import {_updateAuth} from "../../services/avicolappAssembler";
import { useSettlements } from "../../use";

export default {
    initialize: async (user) => {
        state.user = user;
        if (user) {
            _updateAuth(user.uid);
            const { refreshActiveSettlement } = useSettlements();
            await refreshActiveSettlement();
        }
    }
}