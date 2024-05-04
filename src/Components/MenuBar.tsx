import { AppBar, Toolbar, Typography, Grid } from "@mui/material";

function MenuBar() {
  return (
    <Grid item xs={12} py={4}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div">
            Expense Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default MenuBar;
