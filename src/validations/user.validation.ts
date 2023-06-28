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

const passwordFieldSchema = z
  .string()
  .min(8, "Le mot pass devrait avoir au moins 8 caractères")
  .max(64, "Le mot pass devrait avoir au plus 8 caractères");

const passwordConfirmationSchema = z.string().min(1, "Champ obligatoire");
export const changePasswordSchema = z
  .object({
    currentPassword: passwordFieldSchema,
    newPassword: passwordFieldSchema,
    newPasswordConfirmation: passwordConfirmationSchema
  })
  // compare the password and confirm password fields
  .refine((value) => value.newPassword === value.newPasswordConfirmation, {
    message: "Mot de passe différent",
    path: ["newPasswordConfirmation"]
  });
