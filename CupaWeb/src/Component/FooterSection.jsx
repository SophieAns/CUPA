import img from "../assets/brand logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-black py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={img} alt="Logo" className="h-16 w-auto" />
            <p className="text-sm leading-7 text-slate-400">
              A brief summary of what the company is all about. This should be at most 3 sentences long.
            </p>
            <p className="text-xs text-slate-500">@2022 Integra Healthcare</p>
          </div>

          {/* Quick Links 1 */}
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-white">Quick links</h4>
            <div className="space-y-4 text-sm">
              <a href="#" className="block text-slate-400 hover:text-white transition">
                About Us
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Services
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Careers
              </a>
            </div>
          </div>

          {/* Quick Links 2 */}
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-white">&nbsp;</h4>
            <div className="space-y-4 text-sm">
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Blogs & News
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Projects
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Contact Us
              </a>
            </div>
          </div>

          {/* Quick Links 3 */}
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-white">Quick links</h4>
            <div className="space-y-4 text-sm">
              <a href="#" className="block text-slate-400 hover:text-white transition">
                About Us
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Services
              </a>
              <a href="#" className="block text-slate-400 hover:text-white transition">
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2022 Integra Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
