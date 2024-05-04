import { Typography, Paper, Grid, Divider } from "@mui/material";

interface Props {
  income: number;
  expense: number;
}

function Summary({ income, expense }: Props) {
  return (
    <Grid item justifyContent="center" py={3} paddingRight={3} xs={12}>
      <Paper elevation={3} sx={{ width: "100%", padding: "10px" }}>
        <Grid container>
          <Grid item xs={5.5}>
            <Typography variant="body1" component="div" textAlign="center">
              INCOME
            </Typography>
            <Grid
              item
              container
              sx={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                color: "green",
              }}
            >
              <Typography variant="body2" component="div">
                +
              </Typography>
              <Typography variant="body2" component="div">
                {income.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
            </Grid>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item xs={5.5}>
            <Typography variant="body1" component="div" textAlign="center">
              EXPENSE
            </Typography>
            <Grid
              item
              container
              sx={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                color: "red",
              }}
            >
              <Typography variant="body2" component="div">
                -
              </Typography>
              <Typography variant="body2" component="div">
                {expense.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Summary;
