import { ISelectOption } from "../types/app.type";

export const teamTypes: ISelectOption[] = [
  {
    icon: "minus",
    label: "Follower",
    value: "followers"
  },
  {
    icon: "minus",
    label: "Leader",
    value: "leader"
  },
  {
    icon: "minus",
    label: "Owner",
    value: "owner"
  }
];

export const getTeamTypeIcon = (value: string): string => {
  const currentType = teamTypes.find(
    (type: ISelectOption) => type.value === value
  );
  if (!currentType) return "";
  return currentType.icon as string;
};

export enum TEAM_TYPE_ENUM {
  FOLLOWERS = "followers",
  LEADER = "leader",
  OWNER = "owner"
}
