import { z } from "zod";

export const selectOptionSchema = z.object({
  label: z.string(),
  value: z.record(z.string(), z.string()).or(z.string())
});
