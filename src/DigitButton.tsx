import { Button, Grid } from "@mui/material";

interface DigitButtonProps {
  xs: number;
  digit: number;
  enterDigit: (dt: any) => void;
}

export const DigitButton: React.FC<DigitButtonProps> = ({ xs, digit, enterDigit }) => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};
