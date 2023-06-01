import { ReactNode } from "react";
import { IUser } from "./user.type";

export interface ILayoutError {
  setLayoutError: (error: string) => void;
  layoutError: string;
}

export interface ISelectOption {
  label: string;
  value: any;
  icon?: ReactNode | string;
}

export interface IDashboardGlobalState extends ILayoutError, IUser {}
