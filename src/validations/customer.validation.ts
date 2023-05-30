import { z } from "zod";
import { entitySchema } from "./team.validation";

export const customerSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  email: z.string().email({ message: "Invalid email" }),
  team: entitySchema.nullable(),
  arrivalDate: z.date()
});
