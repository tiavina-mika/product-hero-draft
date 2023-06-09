import { useState } from "react";
import { ITeam } from "../../types/team.type";
import Team from "./Team";
import Teams from "./Teams";

type Props = {
  goToTeamCreation: () => void;
  teams: ITeam[];
};
const TeamsTab = ({ teams, goToTeamCreation }: Props) => {
  const [selectedTeam, setSelectedTeam] = useState<ITeam | null>(null);

  const handleSelectTeam = (team: ITeam) => setSelectedTeam(team);

  if (selectedTeam) {
    return <Team team={selectedTeam} />;
  }

  return (
    <Teams
      teams={teams}
      goToTeamCreation={goToTeamCreation}
      goToTeam={handleSelectTeam}
    />
  );
};

export default TeamsTab;
