import { ISelectOption } from "./app.type";

export type IEntityType = "problematic" | "feature" | "userStory" | "bug";
export type IEntitySelectOption = ISelectOption<IEntityType>;
