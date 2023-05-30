import { z } from "zod";
import { customerSchema } from "../validations/customer.validation";
import { IUser } from "./user.type";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICustomer
  extends Pick<IUser, "firstName" | "lastName" | "email"> {}
export type ICustomerInput = z.infer<typeof customerSchema>;
