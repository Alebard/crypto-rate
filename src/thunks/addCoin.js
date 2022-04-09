import {getPrice} from "../API/api";
import {addCoinAction} from "../store/actions/actions";

export function addCoin(coinName) {
    return async function (dispatch) {
        try {
            const price = await getPrice(coinName);
            if (!price) throw new Error("ERROR DATA");
            dispatch(addCoinAction(coinName));
        } catch (err) {
            console.log(err);
        }
    };
}