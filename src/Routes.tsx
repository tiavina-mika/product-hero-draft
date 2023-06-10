import { useState } from "react";
import HomeLayout from "./containers/home/HomeLayout";
import CreateTeamPage from "./containers/team/CreateTeamPage";
import { IHomeTab } from "./types/app.type";
import { ITeam } from "./types/team.type";
import { HOME_TABS, PATH_NAMES } from "./utils/constants";

const Route = () => {
  const [homeTab, setHomeTab] = useState<IHomeTab>(HOME_TABS.MY_FOCUS);
  const [route, setRoute] = useState<string>(PATH_NAMES.home);
  const [teams, setTeams] = useState<ITeam[]>([]);

  const goToTeamCreation = () => setRoute(PATH_NAMES.team.create);
  const goToHome = () => setRoute(PATH_NAMES.home);
  const onHomeTabChange = (tab: IHomeTab) => setHomeTab(tab);

  const onAddTeams = (team: ITeam) => {
    setTeams((prev: ITeam[]) => [team, ...prev]);
    onHomeTabChange(HOME_TABS.SETTINGS);
  };

  if (route === PATH_NAMES.team.create) {
    return <CreateTeamPage goToHome={goToHome} onSave={onAddTeams} />;
  }
  return (
    <HomeLayout
      tab={homeTab}
      onTabChange={onHomeTabChange}
      goToTeamCreation={goToTeamCreation}
      teams={teams}
    />
  );
};

export default Route;
