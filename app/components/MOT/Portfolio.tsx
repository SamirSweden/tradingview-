'use client'

import {usePortfolio} from "@/app/services/portfolio"



type Props = {
    prices: Record<string, number>
};


export default function Portfolio({prices}: Props) {
    const {usd , holdings} = usePortfolio();

    return (
        <div className={'mt-10'}>
            <h2 className={'font-mono text-3xl'}>KrakenBTC</h2>

            <p>balance: ${usd.toFixed(2)}</p>

            <div className={'mt-6 space-y-4'}>
                {holdings.map((h) => {
                    const currentValue = h.amount * prices[h.symbol];
                    const invested = h.amount * h.avgPrice;

                    const profit = currentValue - invested;

                    return(
                            <div key={h.symbol} className={'border p-4 rounded-xl'}>
                                <h3 className={'font-bold'}>{h.symbol}</h3>
                                <p>amount: {h.amount.toFixed(4)}</p>
                                <p>avg price: ${h.avgPrice.toFixed(2)}</p>
                                <p>current value: ${currentValue.toFixed(2)}</p>

                                <p className={
                                    profit >= 0
                                        ? "text-green-500"
                                        : "text-red-500"}
                                >
                                    Pnl: ${profit.toFixed(2)}
                                </p>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}




