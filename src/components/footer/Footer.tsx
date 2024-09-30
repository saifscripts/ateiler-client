import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaRegEnvelope,
} from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="bg-primary-900 text-primary-100 py-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 py-6">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-heading-6 font-semibold text-primary-50">
              Get In Touch
            </h3>
            <div className="flex gap-4 text-lg">
              <a
                className="hover:bg-primary-100 hover:text-primary-900 border border-transparent hover:border-primary-100 rounded-sm p-1"
                target="_blank"
                href="https://facebook.com/saifelhamn"
              >
                <FaFacebookF />
              </a>
              <a
                className="hover:bg-primary-100 hover:text-primary-900 border border-transparent hover:border-primary-100 rounded-sm p-1"
                target="_blank"
                href="https://linkedin.com/in/saifscripts"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="hover:bg-primary-100 hover:text-primary-900 border border-transparent hover:border-primary-100 rounded-sm p-1"
                target="_blank"
                href="tel:+8801766637772"
              >
                <FaPhone />
              </a>
              <a
                className="hover:bg-primary-100 hover:text-primary-900 border border-transparent hover:border-primary-100 rounded-sm p-1"
                target="_blank"
                href="mailto:mdsaifullah1302@gmail.com"
              >
                <FaRegEnvelope />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-body-1 font-semibold text-primary-50">
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
            <h4 className="text-body-1 font-semibold text-primary-50">
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
            <h4 className="text-body-1 font-semibold text-primary-50">
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
        <div className="text-metal-400 flex justify-center items-center border border-metal-500 rounded-sm p-3">
          <p>&copy; {new Date().getFullYear()} ATEILER. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
