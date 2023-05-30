export interface IWorkspace extends Parse.Attributes {
  name: string;
  url: string;
  timezone: string;
  space: 'shared' | 'private';
}
