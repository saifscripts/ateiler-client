import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
} from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="bg-metal-900 text-metal-500 py-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 py-6">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-heading-6 font-semibold text-metal-400">
              Get In Touch
            </h3>
            <div className="flex gap-4 text-lg">
              <a
                className="hover:bg-metal-400 hover:text-metal-900 border border-transparent hover:border-metal-400 rounded-sm p-1"
                target="_blank"
                href="https://facebook.com/saifelhamn"
              >
                <FaFacebookF />
              </a>
              <a
                className="hover:bg-metal-400 hover:text-metal-900 border border-transparent hover:border-metal-400 rounded-sm p-1"
                target="_blank"
                href="https://linkedin.com/in/saifscripts"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="hover:bg-metal-400 hover:text-metal-900 border border-transparent hover:border-metal-400 rounded-sm p-1"
                target="_blank"
                href="tel:+8801766637772"
              >
                <FaPhone />
              </a>
              <a
                className="hover:bg-metal-400 hover:text-metal-900 border border-transparent hover:border-metal-400 rounded-sm p-1"
                target="_blank"
                href="mailto:mdsaifullah1302@gmail.com"
              >
                <FaRegEnvelope />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-body-1 font-semibold text-metal-400">
              Site Links
            </h4>

            <div className="flex flex-col gap-1">
              <HashLink className="hover:underline mb-1" to="/">
                Home
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/products">
                Products
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/manage-products">
                Manage Products
              </HashLink>

              <HashLink className="hover:underline mb-1" to="/cart">
                Cart
              </HashLink>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-body-1 font-semibold text-metal-400">
              Resources
            </h4>

            <div className="flex flex-col gap-1">
              <HashLink className="hover:underline mb-1" to="/">
                Help Center
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/">
                Track Orders
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/">
                Return Policy
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/">
                Customer Feedback
              </HashLink>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-body-1 font-semibold text-metal-400">
              Company
            </h4>

            <div className="flex flex-col gap-1">
              <HashLink className="hover:underline mb-1" to="/about-us">
                About Us
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/#contact-us">
                Contact Us
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/">
                Careers
              </HashLink>
              <HashLink className="hover:underline mb-1" to="/">
                Terms & Policies
              </HashLink>
            </div>
          </div>
        </div>
        <div className="text-metal-500 flex justify-center items-center border border-metal-600 rounded-sm p-3">
          <p>&copy; {new Date().getFullYear()} ATEILER. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
