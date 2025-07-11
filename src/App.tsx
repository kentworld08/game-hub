import {
  Box,
  Grid,
  GridItem,
  HStack,
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
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchTerm?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar
            onSearch={(searchTerm) =>
              setGameQuery({ ...gameQuery, searchTerm })
            }
          />
        </GridItem>
        <Show when={showAside}>
          <GridItem area="aside">
            <GenreList
              onselectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box spaceY={5} paddingLeft={2} marginBottom={5}>
            <GameHeading GameQuery={gameQuery} />
            <HStack>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                selectedOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default App;
