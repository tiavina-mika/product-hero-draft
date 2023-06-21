import { z } from "zod";
import { capitalizeFirstLetter } from "../utils/utils";

export const okrSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .transform(capitalizeFirstLetter),
  icon: z.string().min(1, { message: "Must be an emoji" }),
  products: z.array(z.string()),
  drivers: z.array(z.string())
});

export const editOkrSchema = okrSchema.pick({
  products: true,
  drivers: true
});
