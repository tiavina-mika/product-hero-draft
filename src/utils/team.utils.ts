import { ISelectOption } from "../types/app.type";
import { IEntityOption } from "../types/team.type";

export const teamStatus: ISelectOption[] = [
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

export const getTeamStatusIcon = (value: string): string => {
  const currentType = teamStatus.find(
    (type: ISelectOption) => type.value === value
  );
  if (!currentType) return "";
  return currentType.icon as string;
};

export enum TEAM_STATUS_ENUM {
  FOLLOWERS = "followers",
  LEADER = "leader",
  OWNER = "owner"
}

/**
 *
 * @param members member select option
 * @param userValue user select option
 * @param type
 */
export const addTeamStatusToMembers = (
  members: IEntityOption[],
  userValue: IEntityOption,
  type: string
): IEntityOption[] => {
  const newValues = [];
  for (const member of members) {
    // there should always be one leader
    // change the previous member status "leader" to "follower"
    if (
      member.value.type === TEAM_STATUS_ENUM.LEADER &&
      userValue.value.type === TEAM_STATUS_ENUM.LEADER
    ) {
      const newPrevValue = {
        ...member,
        value: { ...member.value, type: TEAM_STATUS_ENUM.FOLLOWERS }
      };
      newValues.push(newPrevValue);
    } else if (member.value.objectId === userValue.value.objectId) {
      newValues.push({
        ...userValue,
        value: {
          ...userValue.value,
          type
        }
      });
    } else {
      newValues.push(member);
    }
  }

  return newValues;
};