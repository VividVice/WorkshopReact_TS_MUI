import { Button, Grid } from "@mui/material";

// TODO: replace with our own interface
const xs = 3;
const digit = 0;
const enterDigit = (dt: any) => { return dt };

export const DigitButton = () => {
  return (
    <Grid item xs={xs}>
      <Button fullWidth variant="outlined" onClick={() => enterDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};
