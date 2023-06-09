export interface IRole {
  objectId: string;
  name: string;
}

export interface IUser {
  objectId: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  members?: IUser[];
  type?: string;
  role?: IRole;
}
