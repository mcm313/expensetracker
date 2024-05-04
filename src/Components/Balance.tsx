import { Typography, Grid } from "@mui/material";

interface Props {
  balance: number;
}

function Balance({ balance }: Props) {
  let color = "black";

  if (balance < 0) {
    color = "red";
  }

  return (
    <>
      <Grid item xs={12} px={2}>
        <Typography variant="h6" component="div">
          YOUR BALANCE
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={{ display: "inline-flex", alignItems: "center" }}
        px={2}
        color={color}
      >
        <Typography variant="h5" component="div">
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      </Grid>
    </>
  );
}

export default Balance;
