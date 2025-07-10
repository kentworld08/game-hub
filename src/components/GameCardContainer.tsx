import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" zIndex={0}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
