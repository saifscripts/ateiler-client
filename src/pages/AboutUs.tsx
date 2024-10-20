import { ArrowRight, Lightning, LightningSlash, MapPin } from 'phosphor-react';
import { ContactUs } from '../components/contact-us';
import SectionDescription from '../components/ui/SectionDescription';
import SectionTitle from '../components/ui/SectionTitle';
import { ADDRESS, EMAIL, PHONE } from '../constants';

const stores = [
  {
    name: 'Retail Store',
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  {
    name: 'Showroom',
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
  {
    name: 'Head Office',
    address: ADDRESS,
    phone: PHONE,
    email: EMAIL,
  },
];

// const team = [
//   {
//     name: 'Rahatul Arefin',
//     position: 'CEO, Ateiler',
//     image: 'https://randomuser.me/api/portraits/men/26.jpg',
//   },
//   {
//     name: 'Saif Elham',
//     position: 'CTO, Ateiler',
//     image: 'https://randomuser.me/api/portraits/men/28.jpg',
//   },
//   {
//     name: 'Md. Saifur Rahman',
//     position: 'COO, Ateiler',
//     image: 'https://randomuser.me/api/portraits/men/30.jpg',
//   },
//   {
//     name: 'Shafiqur Rahman',
//     position: 'CFO, Ateiler',
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
// ];

const AboutUs = () => {
  return (
    <>
      {/* Company Information */}
      <section className="bg-gradient-to-br from-metal-700 to-metal-900 py-16 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="bg-metal-800/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center text-metal-50 uppercase tracking-wider">
              About Ateiler
            </h3>
            <SectionTitle className="text-metal-50 mb-6">
              Where Fashion Meets Art
            </SectionTitle>
            <SectionDescription className="max-w-3xl mx-auto text-metal-200 text-lg leading-relaxed">
              Ateiler is a premier clothing retailer, offering a range of
              stylish and high-quality clothes for all occasions. We focus on
              modern fashion and classic designs, giving you both comfort and
              style. Whether you need everyday outfits or something special,
              Ateiler helps you show your personal style with confidence.
            </SectionDescription>
          </div>
        </div>
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-metal-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-metal-800 rounded-full filter blur-3xl opacity-20"></div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-12 text-metal-800 rounded-lg shadow-xl">
        <div className="max-w-4xl mx-auto">
          <SectionTitle className="mb-8">Our Mission & Vision</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-metal-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-metal-50">
                <Lightning size={32} className="mr-2" />
                Our Mission
              </h3>
              <p className="text-lg mb-4 text-metal-100">
                At Ateiler, our mission is to empower individuals through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-metal-200">
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  Premium quality fashion
                </li>
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  Seamless online shopping experience
                </li>
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  Unique and stylish collections
                </li>
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  An inclusive and accessible platform
                </li>
              </ul>
            </div>

            <div className="bg-metal-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-metal-900">
                <LightningSlash size={32} className="mr-2" />
                Our Vision
              </h3>
              <p className="text-lg mb-4 text-metal-700">
                Through our vision, we envision a world where:
              </p>
              <ul className="list-none space-y-2 text-metal-600">
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  Everyone can express their unique style
                </li>
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  Fashion is accessible to all
                </li>
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  Creativity shapes the future of clothing
                </li>
                <li className="flex items-center">
                  <ArrowRight size={20} className="mr-2" />
                  Our community inspires and uplifts each other
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl font-semibold italic text-metal-700">
              "Empowering individuals, inspiring confidence, and redefining
              fashion – one outfit at a time."
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="bg-white  py-12">
        <div className="container">
          <SectionTitle>Meet Our Team</SectionTitle>
          <SectionDescription className="max-w-2xl">
            Here is our dynamic team
          </SectionDescription>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className=" bg-white rounded-lg border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl text-metal-900 font-semibold px-4 mb-2">
                  {member.name}
                </h3>
                <p className="text-metal-700 px-4 pb-4">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Store Location */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6">
          {stores.map((store) => (
            <div
              key={store.name}
              className="text-center bg-white rounded-xl p-6"
            >
              <div className="flex items-center justify-center mb-4">
                <MapPin className="text-metal-700" size={32} />
              </div>
              <h3 className="text-xl text-metal-900 font-semibold mb-2">
                {store.name}
              </h3>
              <p className="text-metal-700">{store.address}</p>
              <p className="text-metal-700">{store.phone}</p>
              <p className="text-metal-700">{store.email}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default AboutUs;
