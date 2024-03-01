import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip() {
  const title = (
    <div style={{ fontSize: "20px", margin: "2px" }}>
      <div>
        -There is a number with different 4-digit numbers generated for you.
      </div>
      <div>
        -To guess this number, you need to write a random number and then the
        blue and red balls will guide you.
      </div>
      <div>
        -The meaning of the blue ball is that there is a number you wrote inside
        the number you guessed and you positioned it correctly. For example, if
        the randomly generated number is 1234 and you guessed 1290, you will see
        two blue balls.
      </div>
      <div>
        -The meaning of the red ball is that the number you wrote is in the
        number you guessed, but it is positioned in the wrong place. For
        example, if the randomly generated number is 1234 and you guessed 9081,
        you will see a red ball.
      </div>
      <div>
        -If you can't see any balls, it means all the numbers you guessed are
        wrong.
      </div>
      <div>Example Randomly generated number: 1234</div>
      <div>1.Prediction: 1290: 🔵 🔵</div>
      <div>2.Prediction: 1349: 🔵 🔴 🔴</div>
      <div>3. Prediction: 5678:</div>
      <div>4. Prediction: 1294: 🔵 🔵 🔵</div>
      <div>5. Prediction: 🔵 🔵 🔵 🔵</div>
      <div>Congratulations</div>
    </div>
  );
  return (
    <Tooltip title={title} placement="right-end">
      <IconButton>
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );
}
