import Header from "@/app/components/shared/header/Header";
import Banner from "@/app/components/shared/banners/Banner";

export default function Home() {
  return (
    <>
        <main className="relative min-h-screen overflow-hidden bg-black">
            <div className="max-[500px]:hidden absolute top-0 left-1/2 h-75 w-200 -translate-x-1/2 rounded-full bg-linear-to-br from-[#525252] to-[#171717] blur-[120px]" />
            <Header />

            <div className="pt-62">
                <Banner />
            </div>
        </main>
    </>
  );
}
