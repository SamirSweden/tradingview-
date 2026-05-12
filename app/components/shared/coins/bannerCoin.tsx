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
            <div className="text-center text-white py-20 text-3xl">
                Loading...
            </div>
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
        <section className="py-10 px-0 bg-black">
            <div className="max-w-6xl mx-auto px-6 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {coins.map((coin: Coin) => (
                        <div
                            className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border border-white/5
                            bg-[#0b0b0b]
                            p-10
                            min-h-[260px]
                            shadow-[inset_0_0_80px_rgba(255,255,255,0.03)]
                            hover:border-white/10
                            transition-all
                            duration-500
                            "
                            key={coin.id}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-white/[0.03] to-transparent pointer-events-none">
                                <div className="flex items-center gap-5">
                                    <Image
                                        src={coin.image}
                                        alt={coin.name}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-white text-4xl font-light">
                                            {coin.symbol.toUpperCase()} Savings APR
                                        </h3>
                                        <p className="text-emerald-400 text-5xl font-semibold mt-3">
                                            {coin.price_change_percentage_24h?.toFixed(2)}%
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="
                                    py-3 px-4
                                    bg-transparent absolute right-10 top-1/2 -translate-y-1/2 w-16 h-16
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
    );
}

export  default  BannerCoin