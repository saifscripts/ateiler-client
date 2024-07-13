'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Input,
  InputIcon,
  Label,
  Modal,
  ModalAction,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'keep-react';
import { useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormClearErrors,
  UseFormSetError,
} from 'react-hook-form';
import { BiCheck } from 'react-icons/bi';
import { MdTitle } from 'react-icons/md';
import { cn } from '../../lib/cn';
import { useCreateCategoryMutation } from '../../redux/features/categories/categoryApi';
import base64ToFormData from '../../utils/base64ToFormData';
import { CategorySchema } from '../../validations/category.validation';
import { ThumbnailUpload } from './ThumbnailUpload';

const isImageDataValid = (
  file: string,
  setError: UseFormSetError<FieldValues>,
  clearErrors: UseFormClearErrors<FieldValues>
) => {
  if (!file) {
    setError('thumbnail' as 'keys', {
      type: 'manual',
      message: 'Thumbnail is required!',
    });

    return false;
  }

  clearErrors('thumbnail');
  return true;
};

const CategoryModal = () => {
  const [file, setFile] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(CategorySchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      if (!isImageDataValid(file, setError, clearErrors)) return;

      setIsUploading(true);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: 'POST',
          body: base64ToFormData(file),
        }
      );

      const result = await response.json();
      setIsUploading(false);

      if (result?.success) {
        values.thumbnail = result?.data?.url;
        const data = await createCategory(values);
        if (data?.data?.success) {
          document.getElementById('closeBtn')?.click();
        }
      }
    } catch (error) {
      setIsUploading(false);
    }
  };

  return (
    <Modal>
      <ModalAction asChild>
        <Button size="xs">
          <BiCheck className="text-xl mr-2" />
          New Category
        </Button>
      </ModalAction>
      <ModalBody>
        <ModalContent className="space-y-3">
          <ModalClose className="absolute right-4 top-4" />
          <ModalHeader className="mb-6 space-y-3">
            <ModalTitle>Add A New Category</ModalTitle>
          </ModalHeader>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="space-y-1">
              <Label htmlFor="title">Category Title</Label>
              <div className="relative">
                <Input
                  id="title"
                  type="text"
                  placeholder="Category Title"
                  className={cn('ps-11', {
                    'border border-error-200': Boolean(errors.title),
                  })}
                  aria-invalid={Boolean(errors.title)}
                  {...register('title')}
                />

                <InputIcon>
                  <MdTitle className="text-[#AFBACA]" />
                </InputIcon>
              </div>
              {errors.title && (
                <p className="text-error-400 text-sm" role="alert">
                  {errors.title?.message as string}
                </p>
              )}
            </fieldset>
            <fieldset>
              <Label htmlFor="thumbnail">Category Thumbnail</Label>
              <ThumbnailUpload file={file} setFile={setFile} />
              {errors.thumbnail && (
                <p className="text-error-400 text-sm" role="alert">
                  {errors.thumbnail?.message as string}
                </p>
              )}
            </fieldset>
            <ModalFooter>
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

              <Button
                disabled={isUploading || isLoading}
                size="sm"
                color="primary"
              >
                Confirm
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default CategoryModal;
