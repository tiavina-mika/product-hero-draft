// import { css } from "@emotion/css";
import PageLayout from "../../components/layouts/PageLayout";
import Card from "../../components/Card";
import Section from "../../components/Section";
import { IDriver } from "../../types/driver.type";

// const classes = {
//   card: css({
//     padding: "16px 0px !important"
//   }),
//   cardDescription: css({
//     maxWidth: 400
//   })
// };

type Props = {
  driver: IDriver;
  goToDrivers: () => void;
};
const Driver = ({ driver, goToDrivers }: Props) => {
  return (
    <PageLayout
      title={
        <>
          <span>{driver.icon}</span>
          <span>{driver.name}</span>
        </>
      }
      textSpacing={1}
      onBack={goToDrivers}
    >
      <Section title="description">
        <Card content={driver.description} />
      </Section>
    </PageLayout>
  );
};

export default Driver;
