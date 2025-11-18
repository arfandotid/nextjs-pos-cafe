import z from "zod";

export const orderSchema = z.object({
  order_id: z.string(),
  customer_name: z.string(),
  table_id: z.string(),
  status: z.string(),
});

export type Order = z.infer<typeof orderSchema> & { id: string };
