import img from "../assets/feature image.png";
import img1 from "../assets/feature image1.png";
import img2 from "../assets/feature image2.png";
import img3 from "../assets/feature image3.png";
import img4 from "../assets/feature image4.png";

const features = [
    {
        image : img,
        title: 'Membership Management',
        description:
            'Easily manage member details, track contributions, and communicate effectively.',
        icon: '→',

    },
    {
        image : img1,
        title: 'Financial Tools',
        description:
            'Comprehensive tools for managing finances, including savings, loans, and contributions.',
        icon: '→',
    },
    {
        image : img2,
        title: 'Collaboration Hub',
        description:
            'Streamlined communication channels to keep everyone connected and informed.',
        icon: '→',
    },
    {
        image : img3,
        title: 'Data Security',
        description:
            'Advanced security measures to protect your cooperative’s data.',
        icon: '→',
    },
    {
        image : img4,
        title: 'Membership Management',
        description:
            'Easily manage member details, track contributions, and communicate effectively.',
        icon: '→',
    },
    {
        image : img4,
        title: 'Membership Management',
        description:
            'Easily manage member details, track contributions, and communicate effectively.',
        icon: '→',
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className=" gap-12 py-14">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
                <p className="mb-8 text-center text-lg text-black-600 md:text-xl">
                    Features
                </p>
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                    Why Choose Our Platform?
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition"
                        >
                            <div className="mb-6 top-4 flex h-52 w-full bg-[#D9D9D9]">
                                <img src={feature.image} alt={feature.title} className="h-full w-full object-cover" />
                                <span className="text-4xl text-indigo-600"></span>
                            </div>

                            <div className="min-h-[120px]">
                                <h3 className="text-2xl font-extrabold text-[#000000]">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-sm text-[#000000] md:text-base">
                                    {feature.description}
                                </p>
                            </div>

                            <a
                                href="#"
                                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3A3A7B] px-4 py-3 text-white transition hover:bg-indigo-700"
                            >
                                <span className="mr- text-base">{feature.icon}</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
