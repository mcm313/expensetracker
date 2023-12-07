import { Typography, Paper, Grid, Divider } from "@mui/material";
import { CurrencyYenOutlined, AttachMoneyOutlined } from "@mui/icons-material";
import GPesos from "../currencyicons/greenpeso.png";
import RPesos from "../currencyicons/redpeso.png";

interface Props {
  income: number;
  expense: number;
  currency: string;
}

function Summary({ income, expense, currency }: Props) {
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
              {currency === "Peso" && (
                <>
                  <img src={GPesos} alt="pesoicon" height={15} />
                </>
              )}
              {currency === "Dollar" && (
                <>
                  <AttachMoneyOutlined fontSize="small" />
                </>
              )}
              {currency === "Yen" && (
                <>
                  <CurrencyYenOutlined fontSize="small" />
                </>
              )}
              <Typography variant="body2" component="div">
                {income.toFixed(2)}
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
              {currency === "Peso" && (
                <>
                  <img src={RPesos} alt="pesoicon" height={15} />
                </>
              )}
              {currency === "Dollar" && (
                <>
                  <AttachMoneyOutlined fontSize="small" />
                </>
              )}
              {currency === "Yen" && (
                <>
                  <CurrencyYenOutlined fontSize="small" />
                </>
              )}
              <Typography variant="body2" component="div">
                {expense.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Summary;
