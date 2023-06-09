import { ISelectOption } from "../types/app.type";
import { IEntityOption, ITeam } from "../types/team.type";
import { capitalizeFirstLetter } from "./utils";

export const teamStatus: ISelectOption[] = [
  {
    icon: "team/follower",
    label: "Follower",
    value: "followers"
  },
  {
    icon: "team/leader",
    label: "Leader",
    value: "leader"
  },
  {
    icon: "team/owner",
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

export const countTeamsMember = (team: ITeam): number => {
  const followers = team.followers || [];
  let count = followers.length;

  if (team.leader) count += 1;
  if (team.owner) count += 1;

  return count;
};

export const formatAliasFromName = (name: string): string => {
  const splittedName = name
    .split(" ")
    .map((word: string) => capitalizeFirstLetter(word));
  const alias = splittedName.join("");
  return "@" + alias;
};

export const removeFirstAliasChar = (value: string): string => {
  const newText = value.replace("@", "");
  return newText;
};
