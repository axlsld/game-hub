"use client";

import { Button } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button variant="outline" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  );
};

export default ColorModeSwitch;
