import { ISelectOption } from "./app.type";

export type IEntityType = "problematic" | "feature" | "userStory" | "bug";
export type IEntitySelectOption = ISelectOption<IEntityType>;

export type ITrustLevelOption = {
  min: number;
  max: number;
  label: string;
  title: string;
  color: "warn" | "error" | "success";
};
