import {
  Typography,
  Grid,
  Divider,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { CurrencyYenOutlined, AttachMoneyOutlined } from "@mui/icons-material";
import Peso from "../currencyicons/peso.png";

interface Props {
  addTransaction: (name: string, amount: string, currency: string) => void;
  inputName: string;
  inputAmount: string;
  inputCurrency: string;
  changeName: ChangeFunc;
  changeAmount: ChangeFunc;
  changeCurrency: ChangeFunc;
}

type ChangeFunc = (target: Input) => void;

interface Input {
  target: { value: string };
}

function AddTrans({
  addTransaction,
  inputName,
  inputAmount,
  inputCurrency,
  changeName,
  changeAmount,
  changeCurrency,
}: Props) {
  return (
    <Grid container px={2} py={3}>
      <Grid item xs={12}>
        <Typography variant="h6" component="div">
          Add new transaction
        </Typography>
        <Divider flexItem />
      </Grid>
      <Grid item xs={12} py={1}>
        <Typography variant="body1" component="div">
          Transaction Name
        </Typography>
        <TextField
          placeholder="Enter name"
          value={inputName}
          onChange={changeName}
        />
        <Typography variant="body1" component="div">
          Amount
        </Typography>
        <Select
          displayEmpty
          value={inputCurrency}
          onChange={changeCurrency}
          sx={{ width: "70px" }}
        >
          <MenuItem value={"Dollar"}>
            <AttachMoneyOutlined fontSize="small" />
          </MenuItem>
          <MenuItem value={"Peso"}>
            <img src={Peso} alt="pesoicon" width={15} />
          </MenuItem>
          <MenuItem value={"Yen"}>
            <CurrencyYenOutlined fontSize="small" />
          </MenuItem>
        </Select>
        <TextField
          placeholder="Enter value"
          value={inputAmount}
          onChange={changeAmount}
          helperText="negative - expense, positive - income"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => addTransaction(inputName, inputAmount, inputCurrency)}
        >
          Add transaction
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddTrans;
