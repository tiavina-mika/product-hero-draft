import { z } from "zod";
import { IEntityOption } from "../types/team.type";
import { removeFirstAliasChar } from "../utils/team.utils";

export const entitySchema = z.object({
  label: z.string(),
  value: z.record(z.string(), z.string())
});

export const teamSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email" }),
  alias: z.string().transform((value: string): string => {
    if (value) {
      return removeFirstAliasChar(value);
    }

    return value;
  }),
  icon: z.string().min(1, { message: "Must be an emoji" })
});

export const membersTeamSchema = z
  .object({
    member: entitySchema.nullable(), // not saved to the db
    members: z.array(entitySchema).nullable(), // virtual field (no input field)
    leader: entitySchema.optional(),
    owner: entitySchema.optional(),
    followers: z.array(entitySchema).optional()
  })
  .transform((values) => {
    const newValues: Record<string, any> = { ...values };

    // -------- update followers depending of members -------- //
    const followers = newValues.followers || [];
    const newFollowers = [];
    for (const follower of followers) {
      const currentMember = newValues.members?.find((member: IEntityOption) => {
        return member.value.objectId === follower.value.objectId;
      });

      if (currentMember) {
        newFollowers.push(follower);
      }
    }

    // -------- update leader and owner depending of members -------- //
    for (const memberTypeValue of ["leader", "owner"]) {
      const currentMember = newValues.members?.find((member: IEntityOption) => {
        return (
          member.value.objectId ===
          (values as Record<string, any>)[memberTypeValue]?.value.objectId
        );
      });

      if (!currentMember) {
        delete newValues[memberTypeValue];
      }
    }

    // -------- if status is selected, use followers as default -------- //
    for (const member of newValues.members) {
      const currentFollower = newValues.followers?.find(
        (follower: IEntityOption) =>
          follower.value.objectId === member.value.objectId
      );
      if (
        !currentFollower &&
        newValues.leader?.value.objectId !== member.value.objectId &&
        newValues.owner?.value.objectId !== member.value.objectId
      ) {
        newFollowers.push(member);
      }
    }

    return {
      ...newValues,
      followers: newFollowers
    };
  });
