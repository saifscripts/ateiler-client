import SectionTitle from '../../components/ui/SectionTitle';
import ContactForm from './ContactForm';
import Info from './Info';

const ContactUs = () => {
  return (
    <section id="contact-us" className="container">
      <div className="py-6 bg-white rounded-lg mb-8">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="p-6 flex flex-col lg:flex-row justify-center items-center gap-12">
          <Info />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
