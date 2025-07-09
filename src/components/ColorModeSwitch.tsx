import { Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Switch.Root
      checked={colorMode === "dark"}
      colorPalette={colorMode === "dark" ? "green" : "red"}
      onCheckedChange={toggleColorMode}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>
        {colorMode === "dark" ? "Dark" : "Light"} Mode
      </Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
