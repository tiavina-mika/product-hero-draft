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
import Card from "../../../components/Card";

const classes = {
  content: {
    marginTop: 40
  }
};

type Props = {
  onSave: (values: ITeamsInput) => void;
};
const CreateTeam = ({ onSave }: Props) => {
  return (
    <TextField
      left={<TextField name="icon" />}
      label="Nom"
      placeholder="Nommez votre équipe"
      name="name"
    />
  );
};

export default CreateTeam;
