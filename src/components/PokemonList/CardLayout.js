import React from "react";
import Grid from "@material-ui/core/Grid";

const CardLayout = ({ children }) => {
  return (
    <Grid item xs={6} md={3} style={{ margin: "0 auto" }}>
      {children}
    </Grid>
  );
};

export default CardLayout;
