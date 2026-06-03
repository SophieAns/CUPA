import { Link } from 'react-router-dom';

const ConsultationSection = () => {
  return (
    <section className="bg-[#3A3A7B] py-24 px-6 rounded-[32px mx-6 lg:mx-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
          Ready to Elevate Your Business?
        </p>
        <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
          Reach Out Today for Your Free Consultation!
        </h2>
        <div className="mt-10 flex justify-center">
          <Link to="/contact" target="_blank" rel="noopener noreferrer" className="rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-900">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
