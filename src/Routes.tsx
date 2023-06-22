import { useState } from "react";
import HomeLayout from "./containers/home/HomeLayout";
import CreateTeamPage from "./containers/team/CreateTeamPage";
import CreateDriver from "./containers/driver/CreateDriver";
import CreateOkr from "./containers/okr/CreateOkr";
import EditDriver from "./containers/driver/EditDriver";
import MyAccount from "./containers/general/MyAccount";
import EditOkr from "./containers/okr/EditOkr";
import { IAlert, IHomeTab, ISettingsTab } from "./types/app.type";
import { ITeam } from "./types/team.type";
import { IDriver } from "./types/driver.type";
import { IOkr } from "./types/okr.type";

import { HOME_TABS, PATH_NAMES, SETTING_TABS } from "./utils/constants";

const Route = () => {
  // tabs
  const [homeTab, setHomeTab] = useState<IHomeTab>(HOME_TABS.MY_FOCUS);
  const [homeSettingTab, setHomeSettingTab] = useState<ISettingsTab>(
    SETTING_TABS.GENERAL
  );

  const [alert, setAlert] = useState<IAlert>(null);
  const [route, setRoute] = useState<string>(PATH_NAMES.home);
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [drivers, setDrivers] = useState<IDriver[]>([]);
  const [okrs, setOkrs] = useState<IOkr[]>([]);
  const [driver, setDriver] = useState<IDriver | null>(null);
  const [okr, setOkr] = useState<IOkr | null>(null);

  const goToTeamCreation = () => setRoute(PATH_NAMES.team.create);
  const goToDriverCreation = () => setRoute(PATH_NAMES.driver.create);
  const goToOkrCreation = () => setRoute(PATH_NAMES.okr.create);
  const goToHome = () => setRoute(PATH_NAMES.home);
  const goToMyAccount = () => {
    setRoute(PATH_NAMES.general.myAccount);
    // setHomeSettingTab(SETTING_TABS.GENERAL);
  };
  const goToBackFromMyAccount = () => {
    setRoute(PATH_NAMES.home);
    // setHomeSettingTab(SETTING_TABS.GENERAL);
  };

  // tabs actions
  const onHomeTabChange = (tab: IHomeTab) => setHomeTab(tab);
  const onSettingTabChange = (tab: ISettingsTab) => {
    setHomeSettingTab(tab);
    setAlert(null);
  };

  const onAddTeams = (team: ITeam) => {
    setTeams((prev: ITeam[]) => [team, ...prev]);
    onHomeTabChange(HOME_TABS.SETTINGS);
  };

  const onAddDrivers = (driver: IDriver) => {
    setDrivers((prev: IDriver[]) => [driver, ...prev]);
    onHomeTabChange(HOME_TABS.SETTINGS);
    setRoute(PATH_NAMES.home);
    setAlert({ color: "success", type: "driver" });
  };

  const onAddOkrs = (driver: IOkr) => {
    setDrivers((prev: IOkr[]) => [driver, ...prev]);
    onHomeTabChange(HOME_TABS.SETTINGS);
    setRoute(PATH_NAMES.home);
    setAlert({ color: "success", type: "okr" });
  };

  const handleEditDriver = (values: IDriver) => {
    setDrivers((prev: IDriver[]) => {
      return prev.map((driver: IDriver) => {
        if (driver.objectId === values.objectId) {
          return {
            ...driver,
            ...values
          };
        }
        return driver;
      });
    });
    setRoute(PATH_NAMES.home);
    setAlert({ color: "success", type: "driver" });
  };

  const handleEditOkr = (values: IOkr) => {
    setOkrs((prev: IOkr[]) => {
      return prev.map((okr: IOkr) => {
        if (okr.objectId === values.objectId) {
          return {
            ...okr,
            ...values
          };
        }
        return okr;
      });
    });
    setRoute(PATH_NAMES.home);
    setAlert({ color: "success", type: "driver" });
  };

  const handleSelectDriver = (driver: IDriver) => {
    setDriver(driver);
    setRoute(PATH_NAMES.driver.preview);
  };

  const handleSelectOkr = (okr: IOkr) => {
    setOkr(okr);
    setRoute(PATH_NAMES.okr.edit);
  };

  const handleGoToDrivers = () => {
    setDriver(null);
    setRoute(PATH_NAMES.settingsTabs.drivers);
  };

  const handleGoToOkrs = () => {
    setOkr(null);
    setRoute(PATH_NAMES.settingsTabs.okr);
  };

  if (route === PATH_NAMES.general.myAccount) {
    return <MyAccount onBack={goToBackFromMyAccount} />;
  }

  if (route === PATH_NAMES.team.create) {
    return <CreateTeamPage goToHome={goToHome} onSave={onAddTeams} />;
  }

  if (route === PATH_NAMES.driver.create) {
    return <CreateDriver onSave={onAddDrivers} onBack={goToHome} />;
  }

  if (route === PATH_NAMES.okr.create) {
    return <CreateOkr onSave={onAddOkrs} onBack={goToHome} />;
  }

  if (route === PATH_NAMES.driver.preview) {
    return (
      <EditDriver
        driver={driver}
        onSave={handleEditDriver}
        onGoToDrivers={handleGoToDrivers}
      />
    );
  }

  if (route === PATH_NAMES.okr.edit) {
    return (
      <EditOkr okr={okr} onSave={handleEditOkr} onGoToOkrs={handleGoToOkrs} />
    );
  }

  return (
    <HomeLayout
      tab={homeTab}
      settingTab={homeSettingTab}
      onTabChange={onHomeTabChange}
      onSettingTabChange={onSettingTabChange}
      goToTeamCreation={goToTeamCreation}
      goToDriverCreation={goToDriverCreation}
      goToOkrCreation={goToOkrCreation}
      teams={teams}
      drivers={drivers}
      okrs={okrs}
      onSelectDriver={handleSelectDriver}
      onSelectOkr={handleSelectOkr}
      alert={alert}
      goToMyAccount={goToMyAccount}
    />
  );
};

export default Route;
