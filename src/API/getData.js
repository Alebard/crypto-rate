import {serverUrl, coinName, tsyms} from "./apiUrl";

export async function getData() {
    const url = serverUrl + coinName +tsyms
    const response = await fetch(url);
    return await response.json()
}