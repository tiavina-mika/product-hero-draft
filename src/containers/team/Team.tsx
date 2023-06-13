/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Stack } from "@mui/material";
import Card from "../../components/Card";
import Section from "../../components/Section";
import Member from "../../components/form/inputs/user/Member";
import { ITeam } from "../../types/team.type";
import { IUser } from "../../types/user.type";
import { TEAM_STATUS_ENUM } from "../../utils/team.utils";

const classes = {
  info: {
    marginTop: 30
  },
  member: {
    marginTop: 40
  }
};

const formatTeams = (team: ITeam) => {
  const members = [];

  if (team.leader) {
    members.push({
      ...(team.leader as any).value,
      type: TEAM_STATUS_ENUM.LEADER
    });
  }

  if (team.owner) {
    members.push({
      ...(team.owner as any).value,
      type: TEAM_STATUS_ENUM.OWNER
    });
  }

  if (team.followers) {
    members.push(
      ...(team as any).followers.map((user: IUser) => ({
        ...(user as any).value,
        type: TEAM_STATUS_ENUM.FOLLOWERS
      }))
    );
  }

  return members;
};

type Props = {
  team: ITeam;
};
const Team = ({ team }: Props) => {
  const handleDelete = (id: string) => {};

  return (
    <div className="flexColumn stretchSelf">
      <div className="flexColumn stretchSelf" css={classes.info}>
        <Section title="Information">
          <Stack spacing={2}>
            <Card isActive left={team.icon} content={team.name} />
            <Card content={team.email} />
            {team.alias && <Card content={team.alias} />}
          </Stack>
        </Section>
      </div>

      <div className="flexColumn stretchSelf" css={classes.member}>
        <Section title="Membre">
          <Stack spacing={2}>
            {formatTeams(team).map((user: IUser, index: number) => (
              <Member
                key={index}
                team={user}
                onDelete={handleDelete}
                isLeaderSelected={user.type === TEAM_STATUS_ENUM.LEADER}
                type={user.type}
                isCard
              />
            ))}
          </Stack>
        </Section>
      </div>
    </div>
  );
};

export default Team;
