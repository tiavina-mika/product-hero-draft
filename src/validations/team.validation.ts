import { z } from 'zod';

export const entitySchema = z.object({
  label: z.string(),
  value: z.record(z.string(), z.string()),
});

export const teamSchema = z.object({
  name: z.string().min(2, { message: 'Must be 2 or more characters long' }),
  email: z.string().email({ message: 'Invalid email' }),
  alias: z.string(),
  member: entitySchema.nullable(), // not saved to the db
  members: z.array(entitySchema).nullable(), // virtual field (no input field)
  leader: entitySchema.nullable(),
});
