import { MD5 } from "crypto-js";

export const getCharacters = function () {
    
    const PRIVATE_KEY = "0364344362d95a2051c58be04eb546c3d5b20e5a"; 
    const PUBLIC_KEY = "639eb2eff2702f0b15aad6cd3b6ade8a";

    const BASE_URL = "http://gateway.marvel.com/v1/public";

    const ts = Date.now(); 

    const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY)

    const url = `${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`

    return fetch(url).then(res => res.json()).then(res => res.data.results)

}