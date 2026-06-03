import React from 'react';

const plans = [
  {
    name: 'Basic Plan',
    price: '#30.14',
    period: '/Month',
    description: 'Lorem ipsum dolor sit amet consectetur. Sapien elit morbi et nisl augue nulla.',
    benefits: ['Benefits 1', 'Benefits 1', 'Benefits 1', 'Benefits 1', 'Benefits 1'],
    featured: false,
  },
  {
    name: 'Standard Plan',
    price: '#30.14',
    period: '/Month',
    description: 'Lorem ipsum dolor sit amet consectetur. Sapien elit morbi et nisl augue nulla.',
    benefits: ['Benefits 1', 'Benefits 1', 'Benefits 1', 'Benefits 1', 'Benefits 1'],
    featured: true,
  },
  {
    name: 'Premium Plan',
    price: '#30.14',
    period: '/Month',
    description: 'Lorem ipsum dolor sit amet consectetur. Sapien elit morbi et nisl augue nulla.',
    benefits: ['Benefits 1', 'Benefits 1', 'Benefits 1', 'Benefits 1', 'Benefits 1'],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-[#F2F2FF] p-1 shadow-sm">
            <button className="rounded-full bg-[#3A3A7B] px-6 py-2 text-sm font-semibold text-white shadow-sm transition">
              Monthly
            </button>
            <button className="rounded-full px-6 py-2 text-sm font-semibold text-[#3A3A7B] transition hover:bg-slate-100">
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[32px border p-8 shadow-[0_20px_100px_rgba(56,67,95,0.08)] transition ${
                plan.featured
                  ? 'border-transparent bg-[#3A3A7B] text-white'
                  : 'border-[#E7E7F3] bg-white text-slate-900'
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                {plan.name}
              </p>
              <div className="mt-8 flex items-end gap-3">
                <span className={`text-5xl font-black leading-none ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-base ${plan.featured ? 'text-slate-200' : 'text-slate-500'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-4 text-sm leading-6 ${plan.featured ? 'text-slate-200/90' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <div className="mt-8 space-y-3">
                {plan.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-base font-black ${
                        plan.featured ? 'bg-white text-[#3A3A7B]' : 'bg-[#3A3A7B] text-white'
                      }`}
                    >
                      ✓
                    </span>
                    <span className={`${plan.featured ? 'text-slate-200' : 'text-slate-700'}`}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-white text-[#3A3A7B] hover:bg-slate-100'
                    : 'bg-[#3A3A7B] text-white hover:bg-slate-900'
                }`}
              >
                Choose package
                <span className="text-base">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
