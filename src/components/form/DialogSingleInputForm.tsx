import Dialog from "../Dialog";

type Props = {
  open: boolean;
  toggle: () => void;
  title: string;
};
const DialogSingleInputForm = ({ title, open, toggle }: Props) => {
  return (
    <Dialog open={open} toggle={toggle} title={title}>
      <h1>cool</h1>
    </Dialog>
  );
};

export default DialogSingleInputForm;
