import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Input,
  InputIcon,
  Label,
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'keep-react';
import { Plus } from 'phosphor-react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { MdTitle } from 'react-icons/md';
import { cn } from '../../lib/cn';
import { displayToast } from '../../lib/toast';
import { isImageDataValid } from '../../lib/validations';
import { useCreateBrandMutation } from '../../redux/features/brands/brandApi';
import { useUploadImageMutation } from '../../redux/features/imageUpload/imageUploadApi';
import { BrandSchema } from '../../validations/brand.validation';
import { LogoUpload } from './LogoUpload';

export default function AddBrandModal() {
  const [file, setFile] = useState('');
  const [createBrand] = useCreateBrandMutation();
  const [uploadImage] = useUploadImageMutation();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(BrandSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (!isImageDataValid(file, setError, clearErrors)) return;

    const imageResponse = await uploadImage(file);

    if (imageResponse?.data?.success) {
      values.logo = imageResponse?.data?.data?.url;
      const brandResponse = await createBrand(values);
      displayToast(brandResponse, 'Brand added successfully!');
      if (brandResponse?.data?.success) {
        reset();
        setFile('');
        document.getElementById('closeBtn')?.click();
      }
    }
  };

  return (
    <Modal>
      <ModalAction asChild>
        <Button size="sm">
          <Plus size={16} className="mr-2" />
          New Brand
        </Button>
      </ModalAction>
      <ModalContent className="space-y-3">
        <ModalClose className="absolute right-4 top-4" />
        <ModalHeader className="mb-6 space-y-3">
          <ModalTitle>Add A New Brand</ModalTitle>
        </ModalHeader>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="space-y-1">
            <Label htmlFor="title">Brand Name</Label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                placeholder="Brand Name"
                className={cn('ps-11', {
                  'border border-error-200': Boolean(errors.name),
                })}
                aria-invalid={Boolean(errors.name)}
                {...register('name')}
              />

              <InputIcon>
                <MdTitle className="text-[#AFBACA]" />
              </InputIcon>
            </div>
            {errors.name && (
              <p className="text-error-400 text-sm" role="alert">
                {errors.name?.message as string}
              </p>
            )}
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="thumbnail">Brand Logo</Label>
            <LogoUpload file={file} setFile={setFile} />
            {errors.logo && (
              <p className="text-error-400 text-sm" role="alert">
                {errors.logo?.message as string}
              </p>
            )}
          </fieldset>
          <ModalFooter className="justify-end">
            <ModalClose asChild>
              <Button
                id="closeBtn"
                size="sm"
                variant="outline"
                color="secondary"
              >
                Cancel
              </Button>
            </ModalClose>
            <Button disabled={isSubmitting} size="sm" color="primary">
              Add Brand
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
