import { ReactNode } from "react";

export interface IUser {
  objectId: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  members?: IUser[];
}

export interface IRole {
  objectId: string;
  name: string;
}

export interface IRoleOption extends IRole {
  icon?: ReactNode;
}
