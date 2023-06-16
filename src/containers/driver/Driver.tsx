/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import PageLayout from "../../components/layouts/PageLayout";
import Card from "../../components/Card";
import Section from "../../components/Section";
import { IDriver } from "../../types/driver.type";
import { Fragment } from "react";
import { Typography } from "@mui/material";
import { products } from "../../utils/data/product";
import { IProduct } from "../../types/product.type";
import { formatProductOptions } from "../../utils/product.utils";
import { ISelectOption } from "../../types/app.type";
import CardCheckboxInput from "../../components/form/inputs/CardCheckboxInput";

const classes = {
  products: {
    marginTop: 40
  },
  section: {
    marginTop: 0
  }
};

const getProductOptions = (ids: string[]): ISelectOption[] => {
  const fullProducts = products.filter((product: IProduct) =>
    ids.includes(product.objectId)
  );

  const formattedProducts = formatProductOptions(fullProducts);
  return formattedProducts;
};
type Props = {
  driver: IDriver | null;
  onGoToDrivers: () => void;
};
const Driver = ({ driver, onGoToDrivers }: Props) => {
  if (!driver) {
    return <Typography>No driver found</Typography>;
  }

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
      <Section title="Produit associé" css={classes.products}>
        <CardCheckboxInput
          options={getProductOptions(
            ((driver.products as unknown) as string[]) || [] // we use a data from form here, no form api or db
          )}
        />
      </Section>
      <Section title="description" css={classes.section}>
        <Card content={driver.description} />
      </Section>
    </PageLayout>
  );
};

export default Driver;
