import { IUser } from './user.type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICustomer extends Pick<IUser, 'firstName' | 'lastName' | 'email'> {}
