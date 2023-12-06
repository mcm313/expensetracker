import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { CurrencyYenOutlined, AttachMoneyOutlined } from "@mui/icons-material";
import Peso from "../currencyicons/peso.png";

interface Props {
  selectCurr: (curr: string) => void;
  currency: string;
}

function MenuBar({ selectCurr, currency }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (curr: string) => {
    setAnchorEl(null);
    selectCurr(curr);
  };

  return (
    <Grid item xs={12} py={4}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" component="div">
            Expense Tracker
          </Typography>
          <IconButton
            size="large"
            aria-label="currency"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{ marginLeft: "auto" }}
          >
            <CurrencyExchangeIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
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
            <MenuItem onClick={() => handleClose(currency)}>
              Refresh Rates
            </MenuItem>
            <MenuItem onClick={() => handleClose("Dollar")}>
              <AttachMoneyOutlined />
              Dollar
            </MenuItem>
            <MenuItem onClick={() => handleClose("Peso")}>
              <img src={Peso} alt="pesoicon" width={20} />
              <Typography color="inherit" noWrap>
                &nbsp;
              </Typography>
              Peso
            </MenuItem>
            <MenuItem onClick={() => handleClose("Yen")}>
              <CurrencyYenOutlined />
              Yen
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default MenuBar;
