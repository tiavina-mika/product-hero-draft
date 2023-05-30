import { zodResolver } from "@hookform/resolvers/zod";
import { ITeam, IUser } from "@producthero/types";
import { teamSchema } from "@producthero/validations";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

import { createTeam } from "../../actions/team";
import { getUsers } from "../../actions/user";
import AutocompleteField from "../../components/form/fields/AutocompleteField";
import TextField from "../../components/form/fields/TextField";
import Form from "../../components/form/Form";
import FormLayout from "../../components/layouts/FormLayout";
import TitleContainer from "../../components/layouts/TitleContainer";
import { ITeamsInput } from "../../types/team.type";

const initialValues = {
  member: null,
  members: [],
  leader: null
};

// user data to input select option
const formatUserOption = (users: IUser[] | undefined) => {
  if (!users) return [];
  return users.map((user: IUser) => ({
    label: user.lastName,
    value: {
      objectId: user.objectId,
      lastName: user.lastName,
      firstName: user.firstName
    }
  }));
};
const CreateTeam = () => {
  const form = useForm<ITeamsInput>({
    resolver: zodResolver(teamSchema),
    defaultValues: initialValues
  });

  const { isLoading: isUserLoading, data: users } = useQuery(["users"], () =>
    getUsers()
  );

  const { mutate: onSubmit, error, isLoading } = useMutation<
    ITeam,
    unknown,
    ITeamsInput
  >(createTeam, {
    onSuccess: () => {
      form.reset();
    }
  });

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<ITeamsInput> = (values) => {
    onSubmit(values);
  };

  return (
    <FormLayout>
      <TitleContainer
        title="Créer une équipe"
        description="Indiquez quels sont les résultats attendus des actions qui résolvent cette problématique"
        alignment="left"
      />
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Créer l'équipe"
        error={(error as Error)?.message}
        loading={isLoading}
        buttonSx={{ fontSize: 16 }}
      >
        <TextField
          label="Nom de l'équipe"
          placeholder="Equipe produit"
          name="name"
        />
        <TextField
          label="E-mail"
          placeholder="équipeproduit@producthero.com (Facultatif)"
          name="email"
        />
        <TextField label="Alias" placeholder="@Produit" name="alias" />
        <AutocompleteField
          placeholder="Ajouter des membres"
          name="member"
          previewName="members"
          fullWidth
          options={formatUserOption(users)}
          loading={isUserLoading}
          withPreview
          left={<img alt="team" src="/icons/team.svg" />}
        />
        <AutocompleteField
          placeholder="Leader"
          name="leader"
          previewName="members"
          fullWidth
          options={formatUserOption(users)}
          loading={isUserLoading}
          left={<img alt="leader" src="/icons/leader.svg" />}
        />
      </Form>
    </FormLayout>
  );
};

export default CreateTeam;
