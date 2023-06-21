import { z } from "zod";
import { okrSchema, editOkrSchema } from "../validations/okr.validation";
import { IProduct } from "./product.type";
import { IDriver } from "./driver.type";

export interface IOkr {
  objectId: string;
  name: string;
  icon: string;
  products?: IProduct[];
  drivers?: IDriver[];
}

export type IOkrInput = z.infer<typeof okrSchema>;
export type IEditOkrInput = z.infer<typeof editOkrSchema>;
