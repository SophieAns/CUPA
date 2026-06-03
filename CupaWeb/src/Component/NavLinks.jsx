import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/brand logo.png";

const NavLinks = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav
                className="bg-white text-black p-2.5 gap-2.5"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    width: '100%',
                }}
            >
                <div className="mx-auto flex items-center justify-between p-4 md:p-6">
                    <div className="flex items-center gap-3">
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <img src={img} alt="Logo" className="h-10 w-10 object-contain" />
                        </Link>
                    </div>

                <button
                    className="md:hidden rounded-md border border-white p-2"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                <div
                    className={`items-center gap-4 md:flex ${menuOpen ? "flex flex-col mt-4 md:mt-0" : "hidden"}`}
                >
                    <Link to="/" className="px-2 py-1 hover:text-blue-300">
                        Home
                    </Link>
                    <a href="/#features" className="px-2 py-1 hover:text-blue-300">
                        Features
                    </a>
                    <a href="/#howitworks" className="px-2 py-1 hover:text-blue-300">
                        How It Works
                    </a>
                    <a href="/#pricing" className="px-2 py-1 hover:text-blue-300">
                        Pricing
                    </a>
                    <a href="/#contact" className="px-2 py-1 hover:text-blue-300">
                        Contact Us
                    </a>
                    <Link
                        to="/login"
                        className="rounded-full bg-[#141414] text-white  px-4 py-2 text-sm font-medium hover:bg-blue-700 md:ml-4"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
        <div style={{ height: '84px' }} />
        </>
    );
};

export default NavLinks;