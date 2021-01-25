import Popup from "./Popup";
import { RiErrorWarningLine } from "react-icons/ri";
import { IconButton } from "@chakra-ui/react";

const TipAbout = ({ children }) => {
  return (
    <Popup
      trigger={
        <IconButton isRound size="xs" ml={1}>
          <RiErrorWarningLine style={{ transform: "scale(1.5)" }} />
        </IconButton>
      }
    >
      {children}
    </Popup>
  );
};

export default TipAbout;
