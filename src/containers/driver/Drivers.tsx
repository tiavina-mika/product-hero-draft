
/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";
import { Box, Stack } from "@mui/material";
import AddIcon from "../../components/AddIcon";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import { IAlert } from "../../types/app.type";
import { IDriver } from "../../types/driver.type";

const classes = {
  card: css({
    padding: "16px 0px !important"
  }),
  cardDescription: css({
    maxWidth: 400
  })
};

type Props = {
  goToDriverCreation: () => void;
  drivers: IDriver[];
  onSelectDriver: (driver: IDriver) => void;
  alert?: IAlert;
};
const Drivers = ({
  alert,
  goToDriverCreation,
  drivers,
  onSelectDriver
}: Props) => {
  return (
    <div className="flexColumn stretchSelf">
      {alert && alert.type === "driver" && (
        <Box className="stretchSelf" sx={{ mb: 2.05 }}>
          <Alert severity="success" />
        </Box>
      )}
      <Stack spacing={2} alignSelf="stretch">
        {drivers?.map((driver: IDriver, index: number) => (
          <Card
            key={driver.name + index}
            left={driver.icon}
            onClick={() => onSelectDriver(driver)}
            title={driver.name}
            description={driver.description}
            rootClassName={classes.card}
            descriptionClassName={classes.cardDescription}
            withArrow={false}
            right={<img alt="" src="/icons/chevron-down.svg" />}
            withRightDivider={false}
          />
        ))}
      </Stack>
      <AddIcon onClick={goToDriverCreation} />
    </div>
  );
};

export default Drivers;
