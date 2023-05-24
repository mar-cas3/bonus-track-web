import { MD5 } from "crypto-js";

export const getCharacters = function () {
    
    const PRIVATE_KEY = "ab70c1b6544ff658c050124a13959b1070dc7cbe"; 
    const PUBLIC_KEY = "8bd3931e9275a7aab7fbb4e5395b0a57";

    const BASE_URL = "http://gateway.marvel.com/v1/public";

    const ts = Date.now(); 

    const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY)

    const url = `${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`

    return fetch(url).then(res => res.json()).then(res => res.data.results)

}