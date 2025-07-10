import {
  Grid,
  GridItem,
  Show,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

import "./App.css";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSeletedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSeletedPlatform] = useState<Platform | null>(
    null
  );

  // show the aside (GenreList) only on large screens
  const showAside = useBreakpointValue({ base: false, lg: true });
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Stack bg={bg} color={color} px={4}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show when={showAside}>
          <GridItem area="aside">
            <GenreList
              onselectGenre={(genre) => setSeletedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platorm) => setSeletedPlatform(platorm)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default App;
