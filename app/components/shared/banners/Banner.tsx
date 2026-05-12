const content = {
    title: "Beyond crypto. Into everything.",
    text: "Sign up to unlock up to 5,100 USDT in Welcome Bonuses",
    btnText: "get a reward",
};

const Banner = () => {
    return (
        <section className="bg-transparent px-4  pb-20">
            <div className="container">

                <div className="flex flex-col items-center justify-center text-center">

                    <h1
                        className="
                            text-white
                            font-bold
                            leading-tight
                            font-mono
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl

                            max-w-5xl
                            mb-6
                        "
                    >
                        {content.title}
                    </h1>

                    <p
                        className="
                            text-zinc-300
                            font-mono
                            leading-relaxed

                            text-base
                            sm:text-lg
                            md:text-xl

                            max-w-2xl
                        "
                    >
                        {content.text}
                    </p>

                    <div className="mt-10 max-[425px]:w-full">
                        <button
                            className="
                                text-white
                                text-sm
                                sm:text-base
                                font-semibold
                                capitalize
                                max-[425px]:w-full
                                border border-white/10
                                bg-[#131313]
                                py-3
                                px-7
                                rounded-2xl
                                hover:bg-[#1b1b1b]
                                hover:scale-105
                                transition-all
                                duration-300
                            "
                        >
                            {content.btnText}
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .container {
                    max-width: 1230px;
                    padding: 0 15px;
                    margin: 0 auto;
                    width: 100%;
                }
            `}</style>
        </section>
    );
};

export default Banner;