import Header from "@/app/components/shared/Header";

export default function Home() {
  return (
    <>
        <main className="relative min-h-screen overflow-hidden bg-black">

            <div className="absolute top-0 left-1/2 h-155 w-200 -translate-x-1/2 rounded-full bg-linear-to-br from-[#212121] to-[#402f2f] blur-[120px]" />

            <Header />

        </main>
    </>
  );
}
