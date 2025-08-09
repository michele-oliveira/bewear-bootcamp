import { z } from "zod";

export const addProductToCartSchema = z.object({
  productVariantId: z.string(),
  quantity: z.number().min(1),
});

export type addProductToCartSchema = z.infer<typeof addProductToCartSchema>;
