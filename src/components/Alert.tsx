import { Alert as MUIAlert, AlertProps } from "@mui/material";

type Props = AlertProps;
const Alert = ({
  variant = "filled",
  severity = "success",
  ...alertProps
}: Props) => {
  return (
    <MUIAlert variant={variant} severity={severity} {...alertProps}>
      {severity === "success" && "Modification bien prise en compte."}
    </MUIAlert>
  );
};

export default Alert;
