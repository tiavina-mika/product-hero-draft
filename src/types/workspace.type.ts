import { z } from "zod";
import { workspaceSchema } from "../validations/workspace.validation";

export interface IWorkspace {
  objectId: string;
  name: string;
  url: string;
  timezone: string;
  space: "shared" | "private";
}

export type IWorkspaceInput = z.infer<typeof workspaceSchema>;
