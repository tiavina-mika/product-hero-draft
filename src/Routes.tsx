import { useState } from "react";
import HomeLayout from "./containers/home/HomeLayout";
import CreateTeamPage from "./containers/team/CreateTeamPage";
import { PATH_NAMES } from "./utils/constants";

const Route = () => {
  const [route, setRoute] = useState<string>(PATH_NAMES.home);

  const goToTeamCreation = () => setRoute(PATH_NAMES.team.create);
  const goToHome = () => setRoute(PATH_NAMES.home);

  if (route === PATH_NAMES.team.create) {
    return <CreateTeamPage goToHome={goToHome} />
  }
  return (
    <HomeLayout
      goToTeamCreation={goToTeamCreation}
    />
  );
};

export default Route;
