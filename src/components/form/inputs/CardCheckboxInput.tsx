import { Stack, SxProps, Theme } from "@mui/material";
import { ISelectedOptionValue, ISelectOption } from "../../../types/app.type";
import Card from "../../Card";

type Props = {
  onChange: (value: ISelectedOptionValue[]) => void;
  value?: ISelectedOptionValue[];
  options: ISelectOption[];
  sx?: SxProps<Theme>;
};

const CardCheckboxInput = ({
  onChange,
  value = [],
  sx,
  options = []
}: Props) => {
  // const [values, setValues] = useState<ISelectedOptionValue[]>([])

  // const handleSelection = (value: string): void => {
  //   onChange(value);
  //   setValues((prev: ISelectedOptionValue[]): ISelectedOptionValue[] => [value, ...prev])
  // };

  const handleChange = (selectedValue: string): void => {
    // onChange(selectedValue);
    onChange([selectedValue, ...value]);
  };

  return (
    <Stack direction="row" spacing={2} sx={sx}>
      {options.map((option: ISelectOption, index: number) => (
        <Card
          key={option.value + index}
          onClick={() => handleChange(option.value)}
          isActive={value.includes(option.value)}
          content={option.label}
        />
      ))}
    </Stack>
  );
};

export default CardCheckboxInput;
