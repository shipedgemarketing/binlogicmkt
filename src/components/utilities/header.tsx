import { useState } from "react";
import { FaShopify } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import clsx from 'clsx';

export function Header() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <header className="fixed left-1/2 z-99 mt-8 flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between gap-12 rounded-3xl border border-gray-300/70 bg-white/65 px-[2%] py-2 backdrop-blur-md md:w-[calc(100%-3rem)]">
                <div className="h-full hidden md:block">
                    <nav>
                        <ul className="flex flex-row gap-12 items-center">
                            <li className="flex flex-row items-center gap-2">
                                <BsFillClipboard2CheckFill size={"1.5rem"} color="#0060A8" className=""/>
                                <a href="" className="text-md">Fulfillment Centers</a>
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <FaShopify size={"1.5rem"} color="#0060A8"/>
                                <a href="">Shopify Integration</a>
                            </li>
                            <li className="cursor pointer h-full">
                                <a href="">Pricing</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <img src="/logos/mainLogo.svg" alt="binlogic-logo" className="w-auto h-8 md:h-12" />
                </div>
                <button className="bg-[#0060A8] px-4 py-2 text-white rounded-2xl font-medium curosr-pointer hidden">
                    Get Started
                </button>

                <section
                    className="block cursor-pointer md:hidden"
                    onClick={() => setOpen(prev => !prev)}
                >
                    <FiMenu size={"2rem"} />
                </section>
                {/* Menu Mobile */}

                <nav className={clsx("absolute right-0 px-6 w-auto lg:hidden text-center py-3 transform transition-all duration-300 origin-top h-auto rounded-b-xl border border-gray-300/70 bg-white/80 shadow-md shadow-gray-400 backdrop-blur-md text-xl md:text-2xl top-12 z-99",
                    open ?
                        "scale-y-100 opacity-100 max-h-96" :
                        "scale-y-0 opacity-0 max-h-0 pointer-events-none"
                )}>
                    <ul className="flex flex-col gap-8 text-sm">
                        <li className="flex flex-row items-center gap-2">
                            <BsFillClipboard2CheckFill size={"1rem"} color="#0060A8"/>
                            <a href="">Fulfillment Centers</a>
                        </li>
                        <li className="flex flex-row items-center gap-2">
                            <FaShopify size={"1rem"} color="#0060A8"/>
                            <a href="">Shopify Integration</a>
                        </li>
                        <li className="cursor pointer h-full">
                            <a href="">Pricing</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}