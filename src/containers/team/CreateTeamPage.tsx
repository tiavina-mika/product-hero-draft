import { useState } from "react";
import { IMembersTeamInput, ITeamsInput } from "../../types/team.type";
import AddMembersToTeam from "./teamCreation/AddMembersToTeam";
import CreateTeam from "./teamCreation/CreateTeam";

const CreateTeamPage = () => {
  const [step, setStep] = useState<1 | 2>(1);

  const onBack = () => setStep(2);

  const onSaveTeam = (values: ITeamsInput) => {
    console.log("onSaveTeam values", values);
    setStep(2);
  };

  const onAddMembersTeam = (values: IMembersTeamInput) => {
    console.log("onAddMembersTeam values", values);
  };

  return (
    <>
      {step === 1 && <CreateTeam onSave={onSaveTeam} />}
      {step === 2 && (
        <AddMembersToTeam onSave={onAddMembersTeam} onBack={onBack} />
      )}
    </>
  );
};

export default CreateTeamPage;
