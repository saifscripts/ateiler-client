import SectionTitle from '../ui/SectionTitle';
import ContactForm from './ContactForm';
import Info from './Info';

const ContactUs = () => {
  return (
    <section id="contact-us" className="container">
      <div className="py-4 bg-white rounded-xl mb-4">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Info />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
