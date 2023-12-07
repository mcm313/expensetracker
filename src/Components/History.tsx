import React from "react";
import {
  Typography,
  Grid,
  Divider,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Transaction from "./Transaction";
import { useState } from "react";
import { MoreVertOutlined } from "@mui/icons-material";

interface Trans {
  id: number;
  date: string;
  name: string;
  amount: number;
  currency: string;
}

interface Props {
  transactions: Trans[];
  currency: string;
  handleClear: () => void;
  usdrates: { PHP: number; JPY: number };
  jpyrates: { PHP: number; USD: number };
  phprates: { USD: number; JPY: number };
}

function History({
  transactions,
  currency,
  handleClear,
  usdrates,
  jpyrates,
  phprates,
}: Props) {
  const [numberDisplay, setNumberDisplay] = useState(5);

  function addNumDisplay() {
    setNumberDisplay(numberDisplay + 5);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleClear();
  };

  return (
    <Grid item container px={2}>
      <Grid
        item
        container
        xs={12}
        sx={{ display: "inline-flex", alignItems: "center" }}
      >
        <Grid item xs={11}>
          <Typography variant="h6" component="div">
            History
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            size="large"
            aria-label="currency"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{ marginRight: "auto" }}
          >
            <MoreVertOutlined />
          </IconButton>
          <Menu
            id="history-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose()}>Clear history</MenuItem>
          </Menu>
        </Grid>
        <Divider flexItem sx={{ width: "100%" }} />
        <Grid item xs={12} py={1}>
          {transactions.map(
            (trans, index) =>
              index < numberDisplay && (
                <Transaction
                  key={trans.id}
                  trans={trans}
                  currency={currency}
                  usdrates={usdrates}
                  jpyrates={jpyrates}
                  phprates={phprates}
                />
              )
          )}
        </Grid>
        {transactions.length > numberDisplay && (
          <Grid item xs={12} textAlign="right">
            <Button size="small" onClick={addNumDisplay}>
              ...see more
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default History;
