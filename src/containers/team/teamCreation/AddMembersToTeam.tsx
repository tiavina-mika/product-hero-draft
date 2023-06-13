/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import PageLayout from "../../../components/layouts/PageLayout";
import { IMembersTeamInput } from "../../../types/team.type";
import UsersAutocompleteField from "../../../components/form/fields/UsersAutocompleteField";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../../components/form/Form";
import { membersTeamSchema } from "../../../validations/team.validation";
import { getUserFullName } from "../../../utils/user.utils";
import { IUser } from "../../../types/user.type";
import { users } from "../../../utils/data/user";

// user data to input select option
const formatUserOption = (users: IUser[] | undefined) => {
  if (!users) return [];
  return users.map((user: IUser) => ({
    label: getUserFullName(user),
    value: {
      objectId: user.objectId,
      lastName: user.lastName,
      firstName: user.firstName
    }
  }));
};

const initialValues = {
  member: null,
  members: [],
  followers: []
};

const classes = {
  content: {
    marginTop: 40
  }
};

type Props = {
  onSave: (values: IMembersTeamInput) => void;
  onBack?: () => void;
};
const AddMembersToTeam = ({ onSave, onBack }: Props) => {
  const form = useForm<IMembersTeamInput>({
    resolver: zodResolver(membersTeamSchema),
    defaultValues: initialValues
  });

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<IMembersTeamInput> = (values) => {
    onSave(values);
  };

  return (
    <PageLayout
      title="Qui en fait partie ?"
      description="Je peux renseigner des objectifs permettant d’avoir un impact sur la priorisation de la roadmap sur une période donnée."
      css={classes.content}
      onBack={onBack}
    >
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Enregistrer"
        buttonSx={{ fontSize: 16 }}
      >
        <UsersAutocompleteField
          placeholder="Ajouter des membres"
          name="member"
          listName="members"
          fullWidth
          options={formatUserOption(users)}
        />
      </Form>
    </PageLayout>
  );
};

export default AddMembersToTeam;
