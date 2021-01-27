import { Button } from "@material-ui/core";

export default function BTN({
  variant,
  background,
  color,
  size,
  mt,
  text,
  fullWidth,
}) {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      style={{
        background: background,
        color: color,
        marginTop: mt,
        fontSize: size,
        fontFamily: "'Anaktoria', sans-serif",
      }}
    >
      {text}
    </Button>
  );
}
