import logo from '../assets/logo.png'; 

const CompaniesSection = () => {
    return (
        <section className=" gap-6 p-4 py-12 md:py-20">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
                    Trusted by companies around the world
                </h2>
                <div className="flex p-4 gap-6 justify-center">
                    <div className="">
                        <img src={logo} alt="Company" className="w-full max-w-xs rounded-xl object-contain" />
                    </div>
                    <div className="">
                        <img src={logo} alt="Company" className="w-full max-w-xs rounded-xl object-contain" />
                    </div>
                    <div className="">
                        <img src={logo} alt="Company" className="w-full max-w-xs rounded-xl object-contain" />
                    </div>
                    <div className="">
                        <img src={logo} alt="Company" className="w-full max-w-xs rounded-xl object-contain" />
                    </div>
                    <div className="">
                        <img src={logo} alt="Company" className="w-full max-w-xs rounded-xl object-contain" />
                    </div>
                    <div className="">
                        <img src={logo} alt="Company" className="w-full max-w-xs rounded-xl object-contain" />
                    </div>
                    <div className="">
                        <img src={logo} alt="Company" className="w-full max-w-xs rounded-xl object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompaniesSection;    