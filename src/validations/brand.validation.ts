import { z } from 'zod';

export const BrandSchema = z.object({
  name: z.string().min(1),
  logo: z.string().url().optional(),
});
