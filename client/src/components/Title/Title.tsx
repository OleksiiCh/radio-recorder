import Typography from "@material-ui/core/Typography";
import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title = "Page title" }: TitleProps) => (
  <Typography component="h1" variant="h5">
    {title}
  </Typography>
);

export default Title;
