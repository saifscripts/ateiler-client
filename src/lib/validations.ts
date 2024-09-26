import {
  FieldValues,
  UseFormClearErrors,
  UseFormSetError,
} from 'react-hook-form';

export const isImageDataValid = (
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
