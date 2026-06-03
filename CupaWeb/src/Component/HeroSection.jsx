import { Link } from 'react-router-dom';
import heroImg from '../assets/Hero Image.png';

const HeroSection = () => {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="mx-auto  w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-12 lg:gap-12">
                <div className="order-2 md:order-1">
                    <div className="order-2 md:order-2  text-center items-center md:justify-center">
                        <h1 className=" font-black text-black text-6xl lg:text-6xl items-center  font-weight-500 md:justify-center">
                            Streamline Your Cooperative Management with Ease.
                        </h1>
                        <p className="mt-6 text-lg text-gray-700 md:text-xl md:justify-center">
                            Efficient tools to manage memberships, finances, and more.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row md:justify-center">
                        <Link
                            to="/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border-2 border-black px-8 py-3 text-center font-semibold text-black transition hover:bg-black hover:text-white"
                        >
                            Get Started
                        </Link>
                        <a
                            href="#learnmore"
                            className="rounded-full border-2 border-black px-8 py-3 text-center font-semibold text-black transition hover:bg-black hover:text-white"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="order-2 md:order-2 md:flex md:justify-center">
                    <img src={heroImg} alt="Hero" className="w-full max-w-lg rounded-xl object-contain" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;