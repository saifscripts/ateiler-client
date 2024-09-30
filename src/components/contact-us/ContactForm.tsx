'use client';
import { Button, Card, CardContent, toast } from 'keep-react';
import { DeviceMobile, Envelope, User } from 'phosphor-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import AppForm from '../form/AppForm';
import AppInput from '../form/AppInput';
import AppTextarea from '../form/AppTextarea';

const ContactSchema = z.object({
  firstName: z
    .string({ required_error: 'First Name is required' })
    .min(1, { message: 'First Name is required' }),
  lastName: z
    .string({ required_error: 'Last Name is required' })
    .min(1, { message: 'Last Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .min(1, { message: 'Phone number is required' }),
  message: z
    .string({ required_error: 'Message is required' })
    .min(1, { message: 'Message is required' }),
});

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    // TODO:send data to backend
    toast.success(
      `Hey ${data.firstName}, We got your message! We will get back to you soon.`
    );

    return true;
  };

  return (
    <Card
      className="max-w-md mx-auto border-gray-200"
      data-aos="fade-left"
      data-aos-duration="300"
    >
      <CardContent className="space-y-3">
        <AppForm
          schema={ContactSchema}
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          className="space-y-2"
        >
          <div className="flex flex-col min-[400px]:flex-row gap-2">
            <AppInput
              name="firstName"
              label="First Name"
              icon={<User size={19} color="#AFBACA" />}
              placeholder="First Name"
            />

            <AppInput
              name="lastName"
              label="Last Name"
              icon={<User size={19} color="#AFBACA" />}
              placeholder="Last Name"
            />
          </div>
          <AppInput
            name="email"
            label="Email"
            icon={<Envelope size={19} color="#AFBACA" />}
            placeholder="Email"
          />
          <AppInput
            name="phone"
            label="Phone"
            icon={<DeviceMobile size={19} color="#AFBACA" />}
            placeholder="Phone"
          />
          <AppTextarea
            name="message"
            label="Message"
            placeholder="Describe your issue here!"
          />
          <Button className="!mt-3 block w-full" color="primary">
            Send Message
          </Button>
        </AppForm>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
