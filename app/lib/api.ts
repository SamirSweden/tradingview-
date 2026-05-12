import ky from "ky"




export const api = ky.create({
    prefixUrl: "https://api.coingecko.com/api/v3"
})




