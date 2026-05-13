'use client';

import { useState, useEffect } from "react";
import { getCoins } from "@/app/services/coins";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    price_change_percentage_24h: number;
    [key: string]: any;
}

function BannerCoin() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const data = await getCoins() as Coin[];
                setCoins(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, []);

    if (loading) {
        return (
            <section className={'h-screen px-0  bg-transparent'}>
                <div className="max-w-6xl mx-auto px-6 w-full h-full">
                    <div className="flex items-center justify-center h-full">
                        <h1 className="text-center text-white py-20 text-3xl ">
                            Loading...
                        </h1>
                    </div>
                </div>
            </section>
        );
    }

    if (!coins || coins.length === 0) {
        return (
            <div className="text-center text-white py-20 text-3xl">
                No cryptocurrencies available
            </div>
        );
    }

    return (
        <>
        <section className=" px-0 bg-black ">
            <div className="max-w-6xl mx-auto px-6 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {coins.map((coin: Coin) => (
                        <div
                            className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border border-white/10
                            bg-black
                            p-10
                            min-h-[260px]
                            hover:border-gray-600
                            transition-all
                            shadow-[inset_4px_4px_50px_0_hsla(0,0%,100%,.15)]
                            duration-500
                            "
                            key={coin.id}
                        >
                            <div className="absolute inset-0   pointer-events-none">
                                <div className="flex flex-col items-center gap-5  ">
                                    <Image
                                        src={coin.image}
                                        alt={coin.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div className={'flex items-center gap-5 flex-col max-[375px]:items-start  '}>
                                        <h3 className="text-white text-2xl font-light max-[375px]:text-center  ">
                                            {coin.symbol.toUpperCase()} Savings APR
                                        </h3>
                                        <span className="text-emerald-400  text-5xl font-semibold mt-3">
                                            {coin.price_change_percentage_24h?.toFixed(2)}%
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="
                                    py-3 px-4
                                    bg-transparent absolute bottom-3 right-3 w-16 h-16
                                    rounded-full
                                    border border-white/10
                                    text-white/60
                                    hover:bg-white/5
                                    transition
                                    cursor-pointer
                                    flex items-center justify-center
                                    "
                                >
                                    <ArrowRight size={40} className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export  default  BannerCoin