import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Dialog from "../Dialog";
import TextField from "./fields/TextField";
import Form from "./Form";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  schema: any;
  defaultValue?: any;
  onSubmit: <T>(values: T) => void;
  name: string;
};
const DialogSingleInputForm = ({
  description,
  title,
  open,
  onClose,
  schema,
  defaultValue,
  onSubmit,
  name
}: Props) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      [name]: defaultValue
    }
  });

  const { handleSubmit } = form;

  const _onSubmit = <T extends unknown>(values: T): void => {
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog
      fullWidth
      description={description}
      open={open}
      onClose={onClose}
      title={title}
      formId={name}
    >
      <Form formId={name} form={form} onSubmit={handleSubmit(_onSubmit)}>
        <TextField name={name} />
      </Form>
    </Dialog>
  );
};

export default DialogSingleInputForm;
