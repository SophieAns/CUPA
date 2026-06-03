import Testimonies from '../assets/Testimonial Image.png';


const testimonials = [
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive, and the detailed reports give us a clear picture of our financial status at any time.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
    {
        name: 'Fredrick Almond',
        title: 'CTO, Sparkings',
        image: Testimonies,
        text: 'Using the cooperative management system has been a game-changer for our team. It simplifies everything—from managing savings and loans to keeping track of contributions and investments. The dashboard is intuitive.',
    },
];

const TestimonialsSection = () => {
    return (
        <section className=" gap-10 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                            Testimonials
                        </p>
                        <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
                            Hear from Our Satisfied Cooperatives
                        </h2>
                    </div>
                    <div>
                        <p className="text-lg italic text-gray-700">
                            "Discover how our platform has empowered cooperatives to streamline their operations, enhance collaboration, and achieve
                            their goals. See what our users have to say!"
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="mb-4 flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="rounded-md bg-gray-200 p-2 text-gray-700 hover:bg-gray-300"
                                >
                                    <span>🔗</span>
                                </a>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
