import { Theme } from '@emotion/react';
import { Typography } from '@mui/material';

type Props = {
  text: string;
  alignment?: 'left' | 'center' | 'right';
};

const classes = {
  root:
    ({ alignment }: any) =>
    (theme: Theme) => ({
      [theme.breakpoints.up('md')]: {
        textAlign: 'center',
      },
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 1,
      letterSpacing: '0.01em',
      color: theme.palette.grey[800],
      textAlign: alignment,
    }),
};

const Title = ({ text, alignment }: Props) => {
  return (
    <Typography variant="h1" css={classes.root({ alignment })}>
      {text}
    </Typography>
  );
};

export default Title;
