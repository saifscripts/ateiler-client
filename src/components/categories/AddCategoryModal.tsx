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
import { useCreateCategoryMutation } from '../../redux/features/categories/categoryApi';
import { useUploadImageMutation } from '../../redux/features/imageUpload/imageUploadApi';
import { CategorySchema } from '../../validations/category.validation';
import { ThumbnailUpload } from './ThumbnailUpload';

export default function AddCategoryModal() {
  const [file, setFile] = useState('');

  const [createCategory] = useCreateCategoryMutation();
  const [uploadImage] = useUploadImageMutation();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(CategorySchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (!isImageDataValid(file, setError, clearErrors)) return;

    const imageResponse = await uploadImage(file);

    if (imageResponse?.data?.success) {
      values.thumbnail = imageResponse?.data?.data?.url;
      const categoryResponse = await createCategory(values);
      displayToast(categoryResponse, 'Category added successfully!');
      if (categoryResponse?.data?.success) {
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
          New Category
        </Button>
      </ModalAction>

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
          <fieldset className="space-y-1">
            <Label htmlFor="thumbnail">Category Thumbnail</Label>
            <ThumbnailUpload file={file} setFile={setFile} />
            {errors.thumbnail && (
              <p className="text-error-400 text-sm" role="alert">
                {errors.thumbnail?.message as string}
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
              Add Category
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
