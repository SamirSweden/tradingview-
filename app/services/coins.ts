import {api} from "@/app/lib/api"

export  interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    price_change_percentage_24h: number;
    current_price?: number;
    market_cap?: number;
    total_volume?: number;
}


export async function getCoins(): Promise<Coin[]> {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")

    const data = await res.json()
    return data
}



