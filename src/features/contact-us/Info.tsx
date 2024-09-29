import { Envelope, House, Phone } from 'phosphor-react';

const Info = () => {
  return (
    <div className="space-y-4 max-w-md">
      <h2 className="text-heading-6 text-metal-700">Contact Info</h2>
      <p className="text-body-3 text-metal-600">
        Need help or have questions? We're here for you! Reach out via phone,
        email, or fill out the form. We'll get back to you as soon as possible.
      </p>
      <div className="space-y-4">
        <div className="flex gap-4 items-start">
          <div className="bg-primary-400 size-12 flex justify-center items-center rounded-[4px]">
            <House size={24} className="text-white" />
          </div>
          <div>
            <h5 className="text-xl text-metal-800 font-semibold">
              Our Location
            </h5>
            <p className="text-sm text-metal-600">
              Heyako, Fatikchhari, Chittagon
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-primary-400 size-12 flex justify-center items-center rounded-[4px]">
            <Phone size={24} className="text-white" />
          </div>
          <div>
            <h5 className="text-xl text-metal-800 font-semibold">
              Phone Number
            </h5>
            <p className="text-sm text-metal-600">+880 1766637772</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="bg-primary-400 size-12 flex justify-center items-center rounded-[4px]">
            <Envelope size={24} className="text-white" />
          </div>
          <div>
            <h5 className="text-xl text-metal-800 font-semibold">
              Email Address
            </h5>
            <p className="text-sm text-metal-600">mdsaifullah1302@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
