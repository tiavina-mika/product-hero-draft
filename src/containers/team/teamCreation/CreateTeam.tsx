/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../../components/form/Form";
import PageLayout from "../../../components/layouts/PageLayout";
import TextField from "../../../components/form/fields/TextField";
import WithEmojiTextField from "../../../components/form/fields/WithEmojiTextField";

import { ITeamsInput } from "../../../types/team.type";
import { teamSchema } from "../../../validations/team.validation";
import { formatAliasFromName } from "../../../utils/team.utils";

const classes = {
  content: {
    marginTop: 40
  }
};

type Props = {
  onSave: (values: ITeamsInput) => void;
  onBack: () => void;
};
const CreateTeam = ({ onSave, onBack }: Props) => {
  const form = useForm<ITeamsInput>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      icon: "😊"
    }
  });

  const { handleSubmit, setValue } = form;

  // change alias field value based on name
  const onNameChange = (value: string | number) => {
    const newAlias = formatAliasFromName(value as string);
    setValue("alias", newAlias, { shouldValidate: true });
  };

  const onSubmitHandler: SubmitHandler<ITeamsInput> = (values) => {
    onSave(values);
  };

  return (
    <PageLayout
      title="Ajouter une équipe"
      description="Je peux renseigner des objectifs permettant d’avoir un impact sur la priorisation de la roadmap sur une période donnée."
      css={classes.content}
      onBack={onBack}
    >
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Enregistrer"
        buttonSx={{ fontSize: 16 }}
        withSpacing
      >
        <WithEmojiTextField
          label="Nom"
          placeholder="Nommez votre équipe"
          name="name"
          onFieldChange={onNameChange}
        />
        <TextField label="E-mail" placeholder="(Facultatif)" name="email" />
        <TextField label="Alias" placeholder="Ex : @Finance" name="alias" />
      </Form>
    </PageLayout>
  );
};

export default CreateTeam;
