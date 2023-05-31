import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Form from "../../components/form/Form";
import FormLayout from "../../components/layouts/FormLayout";
import TitleContainer from "../../components/layouts/TitleContainer";
import TextField from "../../components/form/fields/TextField";
import AutocompleteField from "../../components/form/fields/AutocompleteField";
import { ITeamsInput } from "../../types/team.type";
import { IUser } from "../../types/user.type";
import { teamSchema } from "../../validations/team.validation";
import { users } from "../../utils/data/user";

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

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<ITeamsInput> = (values) => {
    console.log(values);
  };

  return (
    <FormLayout>
      <TitleContainer
        title="Créer une équipe"
        description="Indiquez quels sont les résultats attendus des actions qui résolvent cette problématique"
        alignment="center"
      />
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Créer l'équipe"
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
          withPreview
          left={<img alt="team" src="/icons/team.svg" />}
        />
      </Form>
    </FormLayout>
  );
};

export default CreateTeam;
