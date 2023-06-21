/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import PageLayout from "../../components/layouts/PageLayout";
import Section from "../../components/Section";
import { IOkr, IEditOkrInput } from "../../types/okr.type";
import { Fragment } from "react";
import { Stack, Typography } from "@mui/material";
import { products } from "../../utils/data/product";
import { formatProductOptions } from "../../utils/product.utils";
import { ISelectOption } from "../../types/app.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editOkrSchema } from "../../validations/okr.validation";
import Form from "../../components/form/Form";
import CardCheckboxField from "../../components/form/fields/CardCheckboxField";

const classes = {
  products: {
    marginTop: 40
  },
  section: {
    marginTop: 0
  }
};

const getProductOptions = (): ISelectOption[] => {
  const formattedProducts = formatProductOptions(products);
  return formattedProducts;
};

const getInitialValues = (okr: IOkr | null) => {
  if (!okr) return;

  return {
    // simulate data from db
    products: (okr as any)?.products || [],
    drivers: (okr as any)?.drivers || []
  };
};
type Props = {
  okr: IOkr | null;
  onGoToOkrs: () => void;
  onSave: (values: IOkr) => void;
};
const EditOkr = ({ onSave, okr, onGoToOkrs }: Props) => {
  const form = useForm<IEditOkrInput>({
    resolver: zodResolver(editOkrSchema),
    defaultValues: getInitialValues(okr)
  });

  const { handleSubmit } = form;

  if (!okr) {
    return <Typography>No okr found</Typography>;
  }

  const onSubmitHandler = (values: IEditOkrInput) => {
    // simlulate data to save to the db
    const newValues = { ...okr, ...values };
    onSave(newValues as any);
  };

  return (
    <PageLayout
      title={
        <Fragment>
          {okr.icon}&ensp;{okr.name}
        </Fragment>
      }
      textSpacing={1}
      onBack={onGoToOkrs}
      contentClassName="flex1"
      alignment="left"
    >
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Fermer"
        buttonSx={{ fontSize: 16 }}
      >
        <Stack spacing={6}>
          <Section title="Produit associé" css={classes.products}>
            <CardCheckboxField options={getProductOptions()} name="products" />
          </Section>
        </Stack>
      </Form>
    </PageLayout>
  );
};

export default EditOkr;
