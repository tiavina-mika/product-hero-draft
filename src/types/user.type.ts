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
