import { z } from "zod";
import {
  driverSchema,
  editDriverSchema
} from "../validations/driver.validation";
import { IProduct } from "./product.type";

export interface IDriver {
  name: string;
  icon: string;
  description?: string;
  products?: IProduct[];
}

export type IDriverInput = z.infer<typeof driverSchema>;
export type IEditDriverInput = z.infer<typeof editDriverSchema>;
