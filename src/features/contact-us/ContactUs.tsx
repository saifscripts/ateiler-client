import SectionTitle from '../../components/ui/SectionTitle';
import ContactForm from './ContactForm';
import Info from './Info';

const ContactUs = () => {
  return (
    <section id="contact-us" className="container">
      <div className="py-4 bg-white rounded-xl mb-4">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="p-6 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12">
          <Info />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
