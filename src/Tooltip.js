import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip() {
  const title = (
    <div style={{ fontSize: "18px", margin: "5px" }}>
      <div>
        -There is a number with different 4-digit numbers generated for you.
      </div>
      <div>
        -To guess this number, you need to write a random number and then the
        blue and red balls will guide you.
      </div>
      <div>-Blue ball (🔵) : One number is positioned correctly.</div>
      <div>-Red ball (🔴) : One number is positioned wrong.</div>
      <div>-No balls : Number is not inside in the generated number.</div>
      <div>Example:</div>
      <div>Randomly generated number: 1234</div>
      <div>1.Prediction: 1290: 🔵 🔵</div>
      <div>2.Prediction: 1349: 🔵 🔴 🔴</div>
      <div>3.Prediction: 5678:</div>
      <div>4.Prediction: 1294: 🔵 🔵 🔵</div>
      <div>5.Prediction: 1234: 🔵 🔵 🔵 🔵</div>
      <div>Congratulations</div>
    </div>
  );
  return (
    <Tooltip title={title} placement="right-end">
      <IconButton>
        <InfoIcon sx={{ color: " white" }} />
      </IconButton>
    </Tooltip>
  );
}
