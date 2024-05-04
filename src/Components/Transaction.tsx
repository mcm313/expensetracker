import { Typography, Paper, Grid } from "@mui/material";

interface Trans {
  date: string;
  name: string;
  amount: number;
}

interface Props {
  trans: Trans;
}

function Transaction({ trans }: Props) {
  function checkBordercolor() {
    if (trans.amount > 0) {
      return "green";
    } else {
      return "red";
    }
  }

  return (
    <Grid item xs={12} py={0.5}>
      <Paper
        variant="outlined"
        sx={{
          padding: "10px",
          borderRightColor: checkBordercolor(),
          borderWidth: "2px",
          borderRightWidth: "4px",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography variant="body2">{trans.date}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{trans.name}</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Typography variant="body2">
              {trans.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Transaction;
