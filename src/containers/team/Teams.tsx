import { Typography } from "@mui/material";
import AddIcon from "../../components/AddIcon";

type Props = {
  goToTeamCreation: () => void;
}
const Teams = ({ goToTeamCreation }: Props) => {
  return (
    <>
      <Typography>Teams</Typography>
      <AddIcon onClick={goToTeamCreation} />
    </>
  );
};

export default Teams;
