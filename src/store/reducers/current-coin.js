
export const CHANGE_CURRENT_COIN = 'CHANGE_CURRENT_COIN'

export function currentCoinAction(coin) {
    return{
        type: CHANGE_CURRENT_COIN,
        coin
    }
}

export function currentCoinReducer(state = '', action){
    switch (action.type){
        case "CHANGE_CURRENT_COIN":
            return action.coin;
        default:
            return state
    }
}
