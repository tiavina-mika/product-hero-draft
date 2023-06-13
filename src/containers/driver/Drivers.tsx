import { Stack, Typography } from "@mui/material";
import AddIcon from "../../components/AddIcon";
import Card from "../../components/Card";
import { IDriver } from "../../types/driver.type";

type Props = {
  goToDriverCreation: () => void;
  drivers: IDriver[];
  goToDriver: (driver: IDriver) => void;
};
const Drivers = ({ goToDriverCreation, drivers, goToDriver }: Props) => {
  return (
    <>
      <Stack spacing={2} alignSelf="stretch">
        {drivers?.map((driver: IDriver, index: number) => (
          <Card
            key={driver.name + index}
            left={driver.icon}
            onClick={() => goToDriver(driver)}
          >
            <Stack direction="row" spacing={0.6} alignItems="center">
              <Typography variant="h4">{driver.name}</Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
      <AddIcon onClick={goToDriverCreation} />
    </>
  );
};

export default Drivers;
