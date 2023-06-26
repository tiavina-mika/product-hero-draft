import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { IChangePasswordInput } from "../../types/user.type";
import { changePasswordSchema } from "../../validations/user.validation";
import Dialog from "../../components/Dialog";
import Form from "../../components/form/Form";
import TextField from "../../components/form/fields/TextField";

const FORM_ID = "ChangePassword";

type Props = {
  onClose: () => void;
  open: boolean;
  onConfirm: (values: IChangePasswordInput) => void;
};
const ChangePasswordDialog = ({ onClose, open, onConfirm }: Props) => {
  const form = useForm<IChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema)
  });

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<IChangePasswordInput> = async (
    values
  ) => {
    onConfirm(values);
    form.reset();
    onClose();
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      title="Changer mot de passe"
      formId={FORM_ID}
    >
      <Form
        form={form}
        onSubmit={handleSubmit(onSubmitHandler)}
        formId={FORM_ID}
        withSpacing
      >
        <TextField
          name="currentPassword"
          label="Mot de passe actuel"
          type="password"
          fullWidth
          required
        />
        <TextField
          name="newPassword"
          label="Nouveau mot de passe"
          type="password"
          fullWidth
          required
        />
        <TextField
          name="newPasswordConfirmation"
          label="Confirmation mot de passe"
          type="password"
          fullWidth
          required
        />
      </Form>
    </Dialog>
  );
};

export default ChangePasswordDialog;
