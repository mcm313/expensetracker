import { Typography, Grid } from "@mui/material";
import { CurrencyYenOutlined, AttachMoneyOutlined } from "@mui/icons-material";
import Peso from "../currencyicons/peso.png";

interface Props {
  currency: string;
  balance: number;
}

function Balance({ currency, balance }: Props) {
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
      >
        {currency === "Peso" && (
          <>
            <img src={Peso} alt="pesoicon" width={35} />
            <Typography color="inherit" noWrap>
              &nbsp;
            </Typography>
          </>
        )}
        {currency === "Dollar" && (
          <>
            <AttachMoneyOutlined fontSize="large" />
          </>
        )}
        {currency === "Yen" && (
          <>
            <CurrencyYenOutlined fontSize="large" />
          </>
        )}
        <Typography variant="h5" component="div">
          {balance.toFixed(2)}
        </Typography>
      </Grid>
    </>
  );
}

export default Balance;
