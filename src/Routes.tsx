import { useState } from "react";
import HomeLayout from "./containers/home/HomeLayout";
import CreateTeamPage from "./containers/team/CreateTeamPage";
import { ITeam } from "./types/team.type";
import { PATH_NAMES } from "./utils/constants";

const Route = () => {
  const [route, setRoute] = useState<string>(PATH_NAMES.home);
  const [teams, setTeams] = useState<ITeam[]>([]);
  console.log("teams", teams);

  const goToTeamCreation = () => setRoute(PATH_NAMES.team.create);
  const goToHome = () => setRoute(PATH_NAMES.home);

  const onAddTeams = (team: ITeam) =>
    setTeams((prev: ITeam[]) => [team, ...prev]);

  if (route === PATH_NAMES.team.create) {
    return <CreateTeamPage goToHome={goToHome} onSave={onAddTeams} />;
  }
  return <HomeLayout goToTeamCreation={goToTeamCreation} teams={teams} />;
};

export default Route;
