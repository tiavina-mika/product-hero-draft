/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import PageLayout from "../../components/layouts/PageLayout";
import Section from "../../components/Section";
import { IDriver, IEditDriverInput } from "../../types/driver.type";
import { Fragment } from "react";
import { Stack, Typography } from "@mui/material";
import { products } from "../../utils/data/product";
import { formatProductOptions } from "../../utils/product.utils";
import { ISelectOption } from "../../types/app.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editDriverSchema } from "../../validations/driver.validation";
import Form from "../../components/form/Form";
import TextareaField from "../../components/form/fields/TextareaField";
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

const getInitialValues = (driver: IDriver | null) => {
  if (!driver) return;

  return {
    // simulate data from db
    products: (driver as any)?.products || [],
    description: driver.description
  };
};
type Props = {
  driver: IDriver | null;
  onGoToDrivers: () => void;
  onSave: (values: IDriver) => void;
};
const EditDriver = ({ onSave, driver, onGoToDrivers }: Props) => {
  const form = useForm<IEditDriverInput>({
    resolver: zodResolver(editDriverSchema),
    defaultValues: getInitialValues(driver)
  });

  const { handleSubmit } = form;

  if (!driver) {
    return <Typography>No driver found</Typography>;
  }

  const onSubmitHandler = (values: IEditDriverInput) => {
    // simlulate data to save to the db
    const newValues = { ...driver, ...values };
    onSave(newValues as any);
  };

  return (
    <PageLayout
      title={
        <Fragment>
          {driver.icon}&ensp;{driver.name}
        </Fragment>
      }
      textSpacing={1}
      onBack={onGoToDrivers}
      contentClassName="flex1"
      alignment="left"
    >
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        primaryButtonText="Enregistrer"
        buttonSx={{ fontSize: 16 }}
      >
        <Stack spacing={6}>
          <Section title="Produit associé" css={classes.products}>
            <CardCheckboxField options={getProductOptions()} name="products" />
          </Section>
          <Section title="description" css={classes.section}>
            <TextareaField name="description" />
          </Section>
        </Stack>
      </Form>
    </PageLayout>
  );
};

export default EditDriver;
