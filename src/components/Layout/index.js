import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as BrowserLink, useParams } from "react-router-dom";

const Layout = ({ children }) => {
  const { name } = useParams();

  return (
    <Container>
      <Grid container spacing={2} style={{ marginBottom: "2rem" }}>
        <Grid item xs={12}>
          <Link color="inherit" underline="none" component={BrowserLink} to="/">
            <Typography
              variant="h4"
              component="h1"
              style={{ margin: "2rem 0 1rem 0", display: "inline-block" }}
            >
              {!name ? "Pokemon API" : "<"}
            </Typography>
          </Link>
          {name && (
            <Typography
              variant="h4"
              component="h1"
              style={{
                display: "inline-block",
                marginLeft: "1rem",
                textTransform: "capitalize"
              }}
            >
              {name}
            </Typography>
          )}
        </Grid>
        {children}
      </Grid>
    </Container>
  );
};

export default Layout;
