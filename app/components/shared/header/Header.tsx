"use client";

import { useState } from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { title: "Check-list", path: "/checklist" },
    { title: "Trade", path: "/trade" },
    { title: "Contact", path: "/contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()


    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
            <div className="max-w-6xl px-4  mx-auto w-full h-full">

                <div
                    className="
                        flex items-center justify-between
                        px-6 py-4
                        rounded-full
                        backdrop-blur-xl
                        max-[500px]:bg-black
                        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                        max-[500px]:border
                        max-[500px]:border-gray-700
                    "
                >
                    <Link
                        href="/"
                        className="
                            text-2xl
                            font-black
                            tracking-wide
                            text-white
                            font-mono
                        "
                    >
                        Kraken
                    </Link>

                    <nav className="hidden md:flex items-center gap-2 py-2  shadow-[inset_4px_4px_20px_0_hsla(0,0%,100%,.15)] rounded-4xl  ">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return(
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                                        duration-300  ${isActive 
                                        ? "text-white bg-black border border-[#2e2638]"
                                        : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-3">

                        <button className={`
                            bg-white text-black font-mono py-2 px-6 rounded-2xl cursor-pointer max-[430px]:hidden
                        `}>
                            mnt
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="
                                md:hidden
                                flex items-center justify-center
                                w-11 h-11
                                rounded-xl
                                border border-white/10
                                bg-[#111]
                                text-white
                                backdrop-blur-md
                                outline-none
                                border-none
                            "
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                        md:hidden
                        overflow-hidden
                        transition-all
                        duration-500
                        ${
                        isOpen
                            ? "max-h-[500px] opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                    }
                    `}
                >
                    <div
                        className="
                            flex flex-col gap-2
                            p-4
                            rounded-2xl
                            border border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            shadow-2xl
                        "
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className="
                                    px-4 py-3
                                    rounded-xl
                                    text-gray-400
                                    font-medium
                                    transition-all
                                    duration-300
                                    hover:bg-white/10
                                    hover:text-white
                                "
                            >
                                {item.title}
                            </Link>
                        ))}

                        <button
                            className="
                            bg-black
                                shadow-[inset_50px_40px_60px_0_hsla(0,0%,100%,.15)]
                                text-white
                                py-3 px-4
                                rounded-3xl
                            "
                        >
                            Get Started
                        </button>
                        <span className={'text-gray-400 text-center text-sm '}>kraken &mdash; ryan</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;