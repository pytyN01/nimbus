import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function BTN({
  variant,
  background,
  color,
  size,
  mt,
  text,
  fullWidth,
  to,
}) {
  return (
    <Button
      component={Link}
      fullWidth={fullWidth}
      variant={variant}
      style={{
        background: background,
        color: color,
        marginTop: mt,
        fontSize: size,
        fontFamily: "'Anaktoria', sans-serif",
      }}
      to={`/${to}`}
    >
      {text}
    </Button>
  );
}
