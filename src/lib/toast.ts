import { toast } from 'keep-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const displayToast = (result: any, message?: string, options?: any) => {
  if (result?.data?.success) {
    toast.success(message || result?.data?.message, options);
  } else {
    toast.error(
      result?.error?.data?.errorSources
        .map((item: any) => item.message)
        .join('\n')
    );
  }
};
