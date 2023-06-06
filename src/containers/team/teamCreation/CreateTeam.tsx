/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../../components/form/Form";
import PageLayout from "../../../components/layouts/PageLayout";
import TextField from "../../../components/form/fields/TextField";
import { ITeamsInput } from "../../../types/team.type";
import { teamSchema } from "../../../validations/team.validation";

const classes = {
  content: {
    marginTop: 40
  }
};

type Props = {
  onSave: (values: ITeamsInput) => void;
};
const CreateTeam = ({ onSave }: Props) => {
  const form = useForm<ITeamsInput>({
    resolver: zodResolver(teamSchema)
  });

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<ITeamsInput> = (values) => {
    onSave(values);
  };

  return (
    <PageLayout
      title="Ajouter une équipe"
      description="Je peux renseigner des objectifs permettant d’avoir un impact sur la priorisation de la roadmap sur une période donnée."
      alignment="center"
      css={classes.content}
    >
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Enregistrer"
        buttonSx={{ fontSize: 16 }}
        withSpacing
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
      </Form>
    </PageLayout>
  );
};

export default CreateTeam;
