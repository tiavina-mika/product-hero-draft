import { useState } from "react";
import HomeLayout from "./containers/home/HomeLayout";
import CreateTeamPage from "./containers/team/CreateTeamPage";
import CreateDriver from "./containers/driver/CreateDriver";
import { IHomeTab, ISettingsTab } from "./types/app.type";
import { ITeam } from "./types/team.type";
import { IDriver } from "./types/driver.type";

import { HOME_TABS, PATH_NAMES, SETTING_TABS } from "./utils/constants";

const Route = () => {
  // tabs
  const [homeTab, setHomeTab] = useState<IHomeTab>(HOME_TABS.MY_FOCUS);
  const [homeSettingTab, setHomeSettingTab] = useState<ISettingsTab>(
    SETTING_TABS.TEAMS
  );

  const [route, setRoute] = useState<string>(PATH_NAMES.home);
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  const goToTeamCreation = () => setRoute(PATH_NAMES.team.create);
  const goToDriverCreation = () => setRoute(PATH_NAMES.driver.create);
  const goToHome = () => setRoute(PATH_NAMES.home);

  // tabs actions
  const onHomeTabChange = (tab: IHomeTab) => setHomeTab(tab);
  const onSettingTabChange = (tab: ISettingsTab) => setHomeSettingTab(tab);

  const onAddTeams = (team: ITeam) => {
    setTeams((prev: ITeam[]) => [team, ...prev]);
    onHomeTabChange(HOME_TABS.SETTINGS);
  };

  const onAddDrivers = (driver: IDriver) => {
    setDrivers((prev: IDriver[]) => [driver, ...prev]);
    onHomeTabChange(HOME_TABS.SETTINGS);
    setRoute(PATH_NAMES.home);
  };

  if (route === PATH_NAMES.team.create) {
    return <CreateTeamPage goToHome={goToHome} onSave={onAddTeams} />;
  }

  if (route === PATH_NAMES.driver.create) {
    return <CreateDriver onSave={onAddDrivers} onBack={goToHome} />;
  }

  return (
    <HomeLayout
      tab={homeTab}
      settingTab={homeSettingTab}
      onTabChange={onHomeTabChange}
      onSettingTabChange={onSettingTabChange}
      goToTeamCreation={goToTeamCreation}
      goToDriverCreation={goToDriverCreation}
      teams={teams}
      drivers={drivers}
    />
  );
};

export default Route;
