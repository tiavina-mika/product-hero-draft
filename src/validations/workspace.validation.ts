import { z } from 'zod';

export const workspaceSchema = z.object({
  name: z.string().min(5, { message: 'Must be 5 or more characters long' }),
  url: z.string().url({ message: 'Invalid url' }),
  timezone: z.string(),
  space: z.union([z.literal('shared'), z.literal('private')]),
});
