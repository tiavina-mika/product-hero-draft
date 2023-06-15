import { Stack, Typography } from "@mui/material";
import AddIcon from "../../components/AddIcon";
import Card from "../../components/Card";
import { ITeam } from "../../types/team.type";

type Props = {
  goToTeamCreation: () => void;
  teams: ITeam[];
  goToTeam: (team: ITeam) => void;
};
const Teams = ({ goToTeamCreation, teams, goToTeam }: Props) => {
  return (
    <>
      <Stack spacing={2} alignSelf="stretch">
        {teams?.map((team: ITeam, index: number) => (
          <Card
            key={team.name + index}
            left={team.icon}
            onClick={() => goToTeam(team)}
            withArrow
          >
            <Stack direction="row" spacing={0.6} alignItems="center">
              <Typography variant="h4">{team.name}</Typography>
              <Typography variant="caption">({team.count} pers.)</Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
      <AddIcon onClick={goToTeamCreation} />
    </>
  );
};

export default Teams;
