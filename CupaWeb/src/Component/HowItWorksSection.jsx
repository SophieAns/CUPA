import React from 'react';
import { Link } from 'react-router-dom';


const steps = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Create your account in minutes.',
  },
  {
    number: '2',
    title: 'Set Up Your Cooperative',
    description: 'Add members, set up financials, and customize your dashboard.',
  },
  {
    number: '3',
    title: 'Manage and Grow',
    description: 'Use our tools to streamline operations and grow your cooperative.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="howitworks" className="bg-[#3A3A7B] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-200">
              How it Works
            </p>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              How it Works
            </h2>
            <p className="mt-6 text-base text-slate-200 sm:text-lg">
              Quickly set up your cooperative, streamline operations, and start managing with ease.
            </p>
            <Link
              to="/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full border border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#3A3A7B]"
            >
              Get Started
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-32px bg-white p-6 text-slate-900 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-lg font-black text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;