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

const classes = {
  section: {
    marginTop: 32
  }
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
      <Section title="description" css={classes.section}>
        <Card content={driver.description} />
      </Section>
    </PageLayout>
  );
};

export default Driver;
