import { Input, InputIcon, Label, Textarea } from 'keep-react';
import { BiStore } from 'react-icons/bi';

const GeneralInformation = () => {
  return (
    <div className="bg-white p-3 rounded-md space-y-3">
      <h5 className="text-body-1 font-semibold">General Information</h5>
      <fieldset className="space-y-1">
        <Label htmlFor="name">Product Name</Label>
        <div className="relative">
          <Input
            id="name"
            type="text"
            placeholder="Product Name"
            className="ps-11"
          />
          <InputIcon>
            <BiStore className="text-[#AFBACA]" />
          </InputIcon>
        </div>
      </fieldset>
      <fieldset className="space-y-1">
        <Label htmlFor="description">Product Description</Label>

        <Textarea
          id="description"
          placeholder="Write Product Description Here"
        />
      </fieldset>
    </div>
  );
};

export default GeneralInformation;
