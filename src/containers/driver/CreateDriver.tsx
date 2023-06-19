/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Stack } from "@mui/material";
import { IDriver, IDriverInput } from "../../types/driver.type";
import { formatProductOptions } from "../../utils/product.utils";
import { driverSchema } from "../../validations/driver.validation";
import Form from "../../components/form/Form";
import PageLayout from "../../components/layouts/PageLayout";
import TextareaField from "../../components/form/fields/TextareaField";
import CardCheckboxField from "../../components/form/fields/CardCheckboxField";
import WithEmojiTextField from "../../components/form/fields/WithEmojiTextField";
import Section from "../../components/Section";
import { products } from "../../utils/data/product";

const classes = {
  content: css({
    marginTop: 32
  }),
  layout: {
    marginTop: 40
  },
  nameField: {
    "& fieldset": {
      borderBottomRightRadius: 0 + "px !important",
      borderBottomLeftRadius: 0 + "px !important"
    }
  },
  descriptionField: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  }
};

type Props = {
  onSave: (values: IDriver) => void;
  onBack: () => void;
};
const CreateDriver = ({ onSave, onBack }: Props) => {
  const form = useForm<IDriverInput>({
    resolver: zodResolver(driverSchema),
    defaultValues: {
      icon: "😊",
      products: []
    }
  });

  const { handleSubmit } = form;

  const onSubmitHandler = (values: IDriverInput) => {
    const newValues = {
      objectId: uuidv4(),
      ...values
    };

    // simlulate data to save to the db
    onSave(newValues as any);
  };

  return (
    <PageLayout
      title="Ajouter un driver"
      description="Les drivers servent à prioriser les problématiques, fonctionnalités et User Story."
      css={classes.layout}
      contentClassName={classes.content}
      textSpacing={1}
      onBack={onBack}
    >
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Enregistrer"
        buttonSx={{ fontSize: 16 }}
      >
        <Stack spacing={4}>
          <div>
            <WithEmojiTextField
              label="Nom"
              placeholder="Ajouter un nouveau driver"
              name="name"
              onFocus={() => console.log("focus")}
              css={classes.nameField}
            />
            <TextareaField
              placeholder="Décrivez la nature de votre driver, ses impacts, etc..."
              name="description"
              css={classes.descriptionField}
            />
          </div>
          <Section title="À quel(s) produit(s) est-il associé ?">
            <CardCheckboxField
              options={formatProductOptions(products)}
              name="products"
            />
          </Section>
        </Stack>
      </Form>
    </PageLayout>
  );
};

export default CreateDriver;
