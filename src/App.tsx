import {
  Box,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";

import "./App.css";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color} px={4}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show when={showAside}>
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
