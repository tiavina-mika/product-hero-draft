import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import TextField from "@components/form/fields/TextField";
import Form from "@components/form/Form";

import { changePassword } from "@redux/actions/auth";
import { getAppErrorSelector } from "@redux/reducers/appReducer";
import { getUserLoadingSelector } from "@redux/reducers/userReducer";

import { changePasswordSchema } from "@utils/validations/userValidations";

import { ChangePasswordInput } from "types/auth.type";

const ChangePassword = () => {
  const { t } = useTranslation(["user"]);
  const dispatch = useDispatch();
  const loading = useSelector(getUserLoadingSelector);
  const error = useSelector(getAppErrorSelector);

  const form = useForm<ChangePasswordInput>({
    resolver: zodResolver(changePasswordSchema)
  });

  const { handleSubmit } = form;

  const onSubmitHandler: SubmitHandler<ChangePasswordInput> = async (
    values
  ) => {
    await dispatch(changePassword(values));
    form.reset();
  };

  return (
    <Form
      form={form}
      onSubmit={handleSubmit(onSubmitHandler)}
      loading={loading}
      primaryButtonText={t("user:login")}
      error={error}
    >
      <TextField
        sx={{ mb: 2 }}
        name="currentPassword"
        label={t("user:currentPassword")}
        type="password"
        fullWidth
        required
      />
      <TextField
        sx={{ mb: 2 }}
        name="newPassword"
        label={t("user:newPassword")}
        type="password"
        fullWidth
        required
      />
      <TextField
        sx={{ mb: 2 }}
        name="newPasswordConfirmation"
        label={t("user:confirmNewPassword")}
        type="password"
        fullWidth
        required
      />
    </Form>
  );
};

export default ChangePassword;
