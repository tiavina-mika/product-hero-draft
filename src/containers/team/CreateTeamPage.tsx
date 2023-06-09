import { useState } from "react";
import { IMembersTeamInput, ITeamsInput } from "../../types/team.type";
import AddMembersToTeam from "./teamCreation/AddMembersToTeam";
import CreateTeam from "./teamCreation/CreateTeam";

type Props = {
  goToHome: () => void;
}
const CreateTeamPage = ({ goToHome }: Props) => {
  const [step, setStep] = useState<1 | 2>(1);

  const onStepOneBack = () => setStep(2);
  const onBackToHome = () => goToHome();

  const onSaveTeam = (values: ITeamsInput) => {
    console.log("onSaveTeam values", values);
    setStep(2);
  };

  const onAddMembersTeam = (values: IMembersTeamInput) => {
    console.log("onAddMembersTeam values", values);
  };

  return (
    <>
      {step === 1 && <CreateTeam onSave={onSaveTeam} onBack={onBackToHome} />}
      {step === 2 && (
        <AddMembersToTeam onSave={onAddMembersTeam} onBack={onStepOneBack} />
      )}
    </>
  );
};

export default CreateTeamPage;
