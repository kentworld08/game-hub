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

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color}>
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
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
