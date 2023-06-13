/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { IDriver, IDriverInput } from "../../types/driver.type";
import { driverSchema } from "../../validations/driver.validation";
import Form from "../../components/form/Form";
import PageLayout from "../../components/layouts/PageLayout";
import TextField from "../../components/form/fields/TextField";
import WithEmojiTextField from "../../components/form/fields/WithEmojiTextField";
import { slugify } from "../../utils/utils";

const classes = {
  content: css({
    marginTop: 32
  }),
  layout: {
    marginTop: 40
  }
};

type Props = {
  onSave: (values: IDriver) => void;
  onBack: () => void;
};
const CreateDriver = ({ onSave }: Props) => {
  const form = useForm<IDriverInput>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      icon: "😊"
    }
  });

  const { handleSubmit } = form;

  const onBack = () => {};

  const onSubmitHandler = (values: IDriverInput) => {
    const newValues = {
      objectId: uuidv4(),
      slug: slugify(values.name),
      ...values
    };

    onSave(newValues);
  };

  return (
    <PageLayout
      title="Ajouter un driver"
      description="Les drivers servent à prioriser les problématiques, fonctionnalités et User Story."
      css={classes.layout}
      contentClassName={classes.content}
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
          placeholder="Ajouter un nouveau driver"
          name="name"
        />
        <TextField
          placeholder="Décrivez la nature de votre driver, ses impacts, etc..."
          name="description"
        />
      </Form>
    </PageLayout>
  );
};

export default CreateDriver;
