import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      title: '',
      message: '',
    });
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-slate-900 sm:text-5xl">
            Love to hear from you, <br /> Get in touch
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Map Section */}
          <div className="flex flex-col gap-6">
            <div className="h-96 rounded-2xl overflow-hidden bg-slate-200 shadow-md">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.0969897410236!2d7.013197!3d4.7531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sPort%20Harcourt!2sNigeria!5e0!3m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex gap-4 mb-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="font-semibold text-slate-900">Port Harcourt</p>
                  <p className="text-sm text-slate-600 mt-2">
                    48 Tombia Road, beside GRA phase 2, adjacent to Marigold Car Wash, Port Harcourt, Rivers State
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <a href="tel:+2349456625301" className="text-sm text-slate-600 hover:text-slate-900">
                    +2349456625301
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3A3A7B]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3A3A7B]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3A3A7B]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3A3A7B]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3A3A7B] resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3A3A7B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-900 transition"
              >
                Send message
              </button>
            </form>

            <div className="pt-6 border-t border-slate-200 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>✉️</span>
                <a href="mailto:info@spitallabs.com" className="text-slate-900 font-semibold hover:underline">
                  info@spitallabs.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-600">FOLLOW US ON:</span>
                <div className="flex gap-3">
                  <a href="#" className="text-slate-600 hover:text-slate-900 text-xl">
                    🔗
                  </a>
                  <a href="#" className="text-slate-600 hover:text-slate-900 text-xl">
                    𝕏
                  </a>
                  <a href="#" className="text-slate-600 hover:text-slate-900 text-xl">
                    💬
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
