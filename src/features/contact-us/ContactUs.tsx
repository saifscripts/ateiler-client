import ContactForm from './ContactForm';
import Info from './Info';
import Title from './Title';

const ContactUs = () => {
  return (
    <section id="contact-us" className="container">
      <div className="py-6 bg-white rounded-lg mb-8">
        <Title />
        <div className="p-6 flex justify-center gap-12">
          <Info />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
