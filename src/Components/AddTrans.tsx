import { Typography, Grid, Divider, TextField, Button } from "@mui/material";

interface Props {
  addTransaction: (name: string, amount: string) => void;
  inputName: string;
  inputAmount: string;
  changeName: ChangeFunc;
  changeAmount: ChangeFunc;
}

type ChangeFunc = (target: Input) => void;

interface Input {
  target: { value: string };
}

function AddTrans({
  addTransaction,
  inputName,
  inputAmount,
  changeName,
  changeAmount,
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
          onClick={() => addTransaction(inputName, inputAmount)}
        >
          Add transaction
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddTrans;
