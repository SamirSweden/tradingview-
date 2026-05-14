import Header from "@/app/components/shared/header/Header";
import Banner from "@/app/components/shared/banners/Banner";
import Portfolio from "@/app/components/MOT/Portfolio";
import Trade from "@/app/components/MOT/Trade";

async function getPrices() {
    const req = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,solana&vs_currencies=usd",
        {cache: 'no-store'}
    )

    const data = await req.json();

    return {
        BTC: data.bitcoin.usd,
        SOL: data.solana.usd
    }
}

export default async  function Home() {
    const prices = await getPrices();

  return (
    <>
        <main className="relative min-h-screen overflow-hidden bg-black">
            <div className="max-[500px]:hidden absolute top-0 left-1/2 h-75 w-200 -translate-x-1/2 rounded-full bg-linear-to-br from-[#525252] to-[#171717] blur-[120px]" />
            <Header />

            <div className="pt-62">
                <Banner />
            </div>

            <div className={'pt-10'}>
                <div className="grid grid-cols-2 gap-4">

                    <Trade symbol="BTC" price={prices.BTC} />
                    <Trade symbol="SOL" price={prices.SOL} />

                    <Portfolio prices={prices} />
                </div>
            </div>

        </main>
    </>
  );
}
