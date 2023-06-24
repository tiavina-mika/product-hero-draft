import Dialog from "../Dialog";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
};
const DialogSingleInputForm = ({
  description,
  title,
  open,
  onClose
}: Props) => {
  return (
    <Dialog
      fullWidth
      description={description}
      open={open}
      onClose={onClose}
      title={title}
    >
      <h1>cool</h1>
    </Dialog>
  );
};

export default DialogSingleInputForm;
