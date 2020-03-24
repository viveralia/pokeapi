import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link as BrowserLink } from "react-router-dom";
import CardLayout from "./CardLayout";

const PokemonCard = ({ pokemon }) => {
  return (
    <CardLayout>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" style={{ textTransform: "capitalize" }}>
            {pokemon.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={BrowserLink}
            to={`pokemon/${pokemon.name}`}
            size="small"
          >
            Learn more
          </Button>
        </CardActions>
      </Card>
    </CardLayout>
  );
};

export default PokemonCard;
