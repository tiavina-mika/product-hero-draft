import { z } from "zod";
import { capitalizeFirstLetter } from "../utils/utils";

export const driverSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .transform(capitalizeFirstLetter),
  icon: z.string().min(1, { message: "Must be an emoji" }),
  description: z
    .string()
    .max(200, { message: "Must be at least 200 characters" }),
  products: z.array(z.string())
});

export const editDriverSchema = driverSchema.pick({
  description: true,
  products: true
});
