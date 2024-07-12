import { Input, InputIcon, Label, Textarea } from 'keep-react';
import { BiStore } from 'react-icons/bi';

const AddProductBody = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-3 rounded-md">
          <h5 className="text-body-2 font-semibold space-y-3">
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
          </h5>
        </div>
        <div className="bg-white p-3 rounded-md">Second Cell</div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-3 rounded-md">First Cell</div>
        <div className="bg-white p-3 rounded-md">Second Cell</div>
        <div className="bg-white p-3 rounded-md">Second Cell</div>
        <div className="bg-white p-3 rounded-md">Second Cell</div>
      </div>
    </div>
  );
};

export default AddProductBody;
