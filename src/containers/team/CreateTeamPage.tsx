import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IMembersTeamInput, ITeam, ITeamsInput } from "../../types/team.type";
import AddMembersToTeam from "./teamCreation/AddMembersToTeam";
import CreateTeam from "./teamCreation/CreateTeam";

type IFormValues = Partial<ITeamsInput & IMembersTeamInput>;
type Props = {
  goToHome: () => void;
  onSave: (team: ITeam) => void;
};
const CreateTeamPage = ({ goToHome, onSave }: Props) => {
  const [formValues, setFormValues] = useState<ITeam | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  const onStepOneBack = () => setStep(2);
  const onBackToHome = () => goToHome();

  const onSaveTeam = (values: ITeamsInput) => {
    const newValues = {
      objectId: uuidv4(),
      ...values
    };
    // onSave(newValues);
    setFormValues(newValues);
    setStep(2);
  };

  const onAddMembersTeam = (values: IMembersTeamInput) => {
    let team = { ...values };
    if (formValues) {
      team = { ...team, ...formValues };
    }
    setFormValues(team as ITeam | null);
    onSave(team as ITeam);

    goToHome();
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
