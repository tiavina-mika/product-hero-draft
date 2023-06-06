import { ISelectOption } from "../types/app.type";
import { IEntityOption } from "../types/team.type";

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

export const addTeamtypeToUserItem = (memberValues: IEntityOption[], userItem: IEntityOption, type: string): IEntityOption[] => {
  const newValues = [];
  for (const prevValue of memberValues) {
    if (prevValue.value.type === TEAM_TYPE_ENUM.LEADER) {
      const newPrevValue = {
        ...prevValue,
        value: { ...prevValue.value, type: TEAM_TYPE_ENUM.FOLLOWERS }
      };
      newValues.push(newPrevValue);
    } else if (prevValue.value.objectId === userItem.value.objectId) {
      newValues.push({
        ...userItem,
        value: {
          ...userItem.value,
          type
        }
      });
    } else {
      newValues.push(prevValue);
    }
  }

  return newValues;
}