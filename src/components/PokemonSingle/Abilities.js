import React from "react";
import { Typography } from "@material-ui/core";

const Abilities = ({ abilities }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Abilities
      </Typography>
      {abilities.map(({ ability }, i) => (
        <Typography key={i} style={{ textTransform: "capitalize" }}>
          {ability.name}
        </Typography>
      ))}
    </div>
  );
};

export default Abilities;
