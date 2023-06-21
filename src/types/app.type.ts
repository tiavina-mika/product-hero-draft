import { ReactNode } from "react";
import { IUser } from "./user.type";
import { AlertProps } from "@mui/material";

export interface ILayoutError {
  setLayoutError: (error: string) => void;
  layoutError: string;
}

export interface ISelectOption<V = any> {
  label: string;
  value: V;
  icon?: ReactNode | string;
}
export type ISelectedOptionValue<T = string> = ISelectOption<T>["value"];

export interface IDashboardGlobalState extends ILayoutError, IUser {}

export type ISettingsTab =
  | "drivers"
  | "okr"
  | "teams"
  | "profiles"
  | "general"
  | "products";
export type IHomeTab = "backlog" | "roadmap" | "settings" | "myFocus";
export type IAlert = {
  color: AlertProps["color"];
  type: "driver" | "team" | "okr";
} | null;
