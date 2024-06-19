import React from 'react'

const Footer = () => {
  return (
      <footer id='about' className="h-auto w-full mx-auto px-5  bg-black py-16">
        <div class="text-white md:ml-16 flex flex-col md:flex-row justify-between md:items-center gap-6">
          <div class="md:w-1/3 md:pl-10">
            <h5 class="mb-3">Company</h5>
            <a className="block my-2 text-sm text-slate-300">About Us</a>
            <a className="block my-2 text-sm text-slate-300">Why Choose me</a>
            <a className="block my-2 text-sm text-slate-300">Pricing</a>
            <a className="block my-2 text-sm text-slate-300">Testimonial</a>
          </div>

          <div className="md:w-1/3">
            <h5 className="mb-3">Resources</h5>
            <a className="block my-2 text-sm text-slate-300">Privacy Policy</a>
            <a className="block my-2 text-sm text-slate-300">Terms and Condition</a>
            <a className="block my-2 text-sm text-slate-300">Blog</a>
            <a className="block my-2 text-sm text-slate-300">Contact Us</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer
