export interface IWorkspace {
  objectId: string;
  name: string;
  url: string;
  timezone: string;
  space: "shared" | "private";
}
