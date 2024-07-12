'use client';
import {
  Button,
  Card,
  CardContent,
  Input,
  InputIcon,
  Textarea,
} from 'keep-react';
import { DeviceMobile, Envelope, User } from 'phosphor-react';

const ContactForm = () => {
  return (
    <Card className="max-w-sm">
      <CardContent className="space-y-3">
        <form className="space-y-2">
          <div className="flex gap-2">
            <fieldset className="space-y-1">
              <div className="relative">
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="ps-11"
                />
                <InputIcon>
                  <User size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
            <fieldset className="space-y-1">
              <div className="relative">
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="ps-11"
                />
                <InputIcon>
                  <User size={19} color="#AFBACA" />
                </InputIcon>
              </div>
            </fieldset>
          </div>
          <fieldset className="space-y-1">
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="ps-11"
              />
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <div className="relative">
              <Input
                id="phone"
                type="number"
                placeholder="Phone"
                className="ps-11"
              />
              <InputIcon>
                <DeviceMobile size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <Textarea placeholder="Describe your issue here!" />
          <Button className="!mt-3 block w-full" size="sm" color="primary">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
