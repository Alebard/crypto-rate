const SHOW_CHART_COIN = "SHOW_CHART_COIN"
const HIDE_CHART_COIN = "HIDE_CHART_COIN"

export function showChartCoinAction(coin) {
    return{
        type: SHOW_CHART_COIN,
        coin
    }
}

export function hideChartCoinAction(coin) {
    return{
        type: HIDE_CHART_COIN,
        coin
    }
}


export function coinsShowChart(state = [], action) {
    switch (action.type) {
        case SHOW_CHART_COIN:
            if (!state.includes(action.coin)) {
                return [...state, action.coin];
            }
            return state;
        case HIDE_CHART_COIN:
            return state.filter((coin) => coin !== action.coin);
        default:
            return state;
    }
}
