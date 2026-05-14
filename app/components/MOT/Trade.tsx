'use client'

import {usePortfolio} from "@/app/services/portfolio";

type Props = {
    symbol: string;
    price: number;
}


export default  function Trade({symbol,price}: Props) {

    const buyCoin =
        usePortfolio((s) => s.buyCoin)

    return (
        <>
            <section className={'min-h-screen bg-black px-0'}>
                <div className="max-w-6xl mx-auto w-full h-full px-6">
                    <div className="flex items-center justify-center">

                        <div className="p-4 rounded-xl border">
                            <h2 className="font-bold text-2xl">
                                {symbol}
                            </h2>

                            <p>${price.toFixed(2)}</p>
                            <button onClick={() => buyCoin(symbol,price,100)}>
                                buy 100$
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

