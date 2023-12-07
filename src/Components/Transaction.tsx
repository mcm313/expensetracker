import { Typography, Paper, Grid } from "@mui/material";
import { CurrencyYenOutlined, AttachMoneyOutlined } from "@mui/icons-material";
import Peso from "../currencyicons/peso.png";

interface Trans {
  date: string;
  name: string;
  amount: number;
  currency: string;
}

interface Props {
  trans: Trans;
  currency: string;
  usdrates: { PHP: number; JPY: number };
  jpyrates: { PHP: number; USD: number };
  phprates: { USD: number; JPY: number };
}

function Transaction({ trans, currency, usdrates, jpyrates, phprates }: Props) {
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
          <Grid item xs={3}>
            <Typography variant="body2">{trans.name}</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {trans.currency === "Peso" && currency !== "Peso" && (
              <>
                <img src={Peso} alt="pesoicon" height={15} />
                <Typography variant="body2">{trans.amount}</Typography>
              </>
            )}
            {trans.currency === "Dollar" && currency !== "Dollar" && (
              <>
                <AttachMoneyOutlined fontSize="small" />
                <Typography variant="body2">{trans.amount}</Typography>
              </>
            )}
            {trans.currency === "Yen" && currency !== "Yen" && (
              <>
                <CurrencyYenOutlined fontSize="small" />
                <Typography variant="body2">{trans.amount}</Typography>
              </>
            )}
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
            {currency === "Peso" && (
              <>
                <img src={Peso} alt="pesoicon" height={15} />
                {trans.currency === "Peso" && (
                  <Typography variant="body2">
                    {trans.amount.toFixed(2)}
                  </Typography>
                )}
                {trans.currency === "Dollar" && (
                  <Typography variant="body2">
                    {(trans.amount / phprates.USD).toFixed(2)}
                  </Typography>
                )}
                {trans.currency === "Yen" && (
                  <Typography variant="body2">
                    {(trans.amount / phprates.JPY).toFixed(2)}
                  </Typography>
                )}
              </>
            )}
            {currency === "Dollar" && (
              <>
                <AttachMoneyOutlined fontSize="small" />
                {trans.currency === "Dollar" && (
                  <Typography variant="body2">
                    {trans.amount.toFixed(2)}
                  </Typography>
                )}
                {trans.currency === "Peso" && (
                  <Typography variant="body2">
                    {(trans.amount / usdrates.PHP).toFixed(2)}
                  </Typography>
                )}
                {trans.currency === "Yen" && (
                  <Typography variant="body2">
                    {(trans.amount / usdrates.JPY).toFixed(2)}
                  </Typography>
                )}
              </>
            )}
            {currency === "Yen" && (
              <>
                <CurrencyYenOutlined fontSize="small" />
                {trans.currency === "Yen" && (
                  <Typography variant="body2">
                    {trans.amount.toFixed(2)}
                  </Typography>
                )}
                {trans.currency === "Peso" && (
                  <Typography variant="body2">
                    {(trans.amount / jpyrates.PHP).toFixed(2)}
                  </Typography>
                )}
                {trans.currency === "Dollar" && (
                  <Typography variant="body2">
                    {(trans.amount / jpyrates.USD).toFixed(2)}
                  </Typography>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Transaction;
