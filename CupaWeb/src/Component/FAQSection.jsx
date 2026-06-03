import { useState } from 'react';

const faqs = [
  {
    question: 'Question 1',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    question: 'Question 2',
    answer:
      'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
  },
  {
    question: 'Question 3',
    answer:
      'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
  },
  {
    question: 'Question 4',
    answer:
      'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.',
  },
  {
    question: 'Question 5',
    answer:
      'Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">FAQ</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-base text-slate-600">
            Find quick answers to the most common questions about our cooperative management platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[24px border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-slate-700"
                >
                  <span>{faq.question}</span>
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-lg font-bold transition ${
                    isOpen
                      ? 'border-slate-800 bg-slate-800 text-white'
                      : 'border-slate-300 bg-white text-slate-500'
                  }`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
