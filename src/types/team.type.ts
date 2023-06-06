import { z } from "zod";
import {
  membersTeamSchema,
  entitySchema,
  teamSchema
} from "../validations/team.validation";
import { IUser } from "./user.type";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITeam extends Pick<IUser, "email"> {
  objectId: string;
  name: string;
  alias: string;
  members: IUser[];
  leader: IUser;
}

export type ITeamsInput = z.infer<typeof teamSchema>;
export type IMembersTeamInput = z.infer<typeof membersTeamSchema>;
export type IEntityOption = z.infer<typeof entitySchema>;
