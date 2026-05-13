import { create } from "zustand"


type Holding = {
    symbol: string;
    amount: number;
    avgPrice: number
}


type Store = {
    usd: number;
    holdings: Holding[];

    buyCoin: (symbol: string, price: number, usdAmount: number) => void
}



export const usePortfolio = create<Store>((set) => ({
    usd: 10000,
    holdings: [],

    buyCoin: (symbol, price, usdAmount) =>
        set((state) => {
            if(state.usd < usdAmount) return state;

            const coinAmount = usdAmount / price;
            const existing = state.holdings.find((h) => h.symbol === symbol);

            let updated;

            if(existing) {
                updated = state.holdings.map((h) => {
                    if(h.symbol !== symbol) return h;

                    const totalAmount = h.amount + coinAmount;

                    const avgPrice =
                        (h.amount * h.avgPrice + coinAmount * price) / totalAmount;
                    return {
                        ...h,
                        amount: totalAmount,
                        avgPrice,
                    }
                })
            } else {
                updated = [
                    ...state.holdings,
                    {
                        symbol,
                        amount: coinAmount,
                        avgPrice: price
                    }
                ];
            }

            return {
                usd: state.usd - usdAmount,
                holdings: updated
            }

        })
}))