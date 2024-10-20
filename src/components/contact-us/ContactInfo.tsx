import { Button, Input } from 'keep-react';
import { Envelope, House, Phone } from 'phosphor-react';
import { ADDRESS, EMAIL, PHONE } from '../../constants';

const ContactInfo = () => {
  return (
    <div
      className="flex flex-col justify-between max-w-md mx-auto gap-8 w-full overflow-hidden"
      data-aos="fade-right"
      data-aos-duration="300"
    >
      <div className="space-y-4">
        <h2 className="text-heading-6 text-metal-700">Contact Info</h2>
        <p className="text-body-3 text-metal-600">
          Need help or have questions? We're here for you! Reach out via phone,
          email, or fill out the form. We'll get back to you as soon as
          possible.
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-primary-500 size-12 flex justify-center items-center rounded-[4px]">
              <House size={24} className="text-white" />
            </div>
            <div>
              <h5 className="text-xl text-metal-800 font-semibold">
                Our Location
              </h5>
              <p className="text-sm text-metal-600">{ADDRESS}</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-primary-500 size-12 flex justify-center items-center rounded-[4px]">
              <Phone size={24} className="text-white" />
            </div>
            <div>
              <h5 className="text-xl text-metal-800 font-semibold">
                Phone Number
              </h5>
              <p className="text-sm text-metal-600">{PHONE}</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-primary-500 size-12 flex justify-center items-center rounded-[4px]">
              <Envelope size={24} className="text-white" />
            </div>
            <div>
              <h5 className="text-xl text-metal-800 font-semibold">
                Email Address
              </h5>
              <p className="text-sm text-metal-600">{EMAIL}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-4 lg:pb-6">
        <Input name="email" placeholder="Your Email" className="w-full h-10" />
        <Button className="w-full py-3">Get Updates</Button>
      </div>
    </div>
  );
};

export default ContactInfo;
