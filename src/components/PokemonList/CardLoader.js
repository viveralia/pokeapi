import React from "react";
import CardLayout from "./CardLayout";
import Skeleton from "@material-ui/lab/Skeleton";

const CardLoader = () => {
  return (
    <CardLayout>
      <Skeleton variant="rect" height={112} />
    </CardLayout>
  );
};

export default CardLoader;
