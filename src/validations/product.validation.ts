import { z } from 'zod';

export const ProductSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required!',
    })
    .min(1, 'Name is required!'),
  category: z
    .string({
      required_error: 'Category is required!',
    })
    .min(1, 'Category is required!'),
  description: z
    .string({
      required_error: 'Description is required!',
    })
    .min(1, 'Description is required!'),
  imageUrls: z
    .array(z.string(), {
      required_error: 'At least one image is required!',
    })
    .min(1, 'At least one image is required!'),
  price: z
    .string({
      required_error: 'Price is required!',
    })
    .min(1, 'Price is required!')
    .refine((val) => !Number.isNaN(Number(val)) && Number(val) >= 0, {
      message: 'Price must be a non negative number',
    }),
  discount: z
    .string({
      required_error: 'Discount is required!',
    })
    .default('0')
    .refine((val) => Number.isInteger(Number(val)) && Number(val) >= 0, {
      message: 'Discount must be a non negative integer',
    })
    .refine((val) => Number(val) <= 100, {
      message: 'Discount cannot be more than 100%',
    })
    .optional(),
  stockQuantity: z
    .string({
      required_error: 'Discount is required!',
    })
    .min(1, 'Quantity is required!')
    .refine((val) => Number.isInteger(Number(val)) && Number(val) >= 0, {
      message: 'Quantity must be a non negative integer',
    }),
  brand: z
    .string({
      required_error: 'Brand is required!',
    })
    .min(1, 'Brand is required!'),
  rating: z.number().min(0).max(5).default(5),
});
