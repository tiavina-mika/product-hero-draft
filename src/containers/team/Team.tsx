import { Typography } from "@mui/material";
// import Card from "../../components/Card";
import { ITeam } from "../../types/team.type";

type Props = {
  team: ITeam;
};
const Team = ({ team }: Props) => {
  return (
    <>
      <Typography>{team.name}</Typography>
    </>
  );
};

export default Team;
