import { z } from "zod";

export const lastNameSchema = z.object({
  lastName: z.string()
});

export const firstNameSchema = z.object({
  firstName: z.string()
});

export const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email" })
});
