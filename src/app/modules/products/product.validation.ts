import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    price: z.number(),
    isFlashSale: z.boolean().optional(),
    isTrending: z.boolean().optional(),
    rating: z.number().optional(),
    isDeleted: z.boolean().optional(),
  }),
});


const updateProductValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
    isFlashSale: z.boolean().optional(),
    isTrending: z.boolean().optional(),
    rating: z.number().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema
};