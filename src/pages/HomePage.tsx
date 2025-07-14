import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { useColorModeValue } from "@/components/ui/color-mode";
import {
  Stack,
  Grid,
  Show,
  GridItem,
  Box,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const HomePage = () => {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <Stack bg={bg} color={color} px={4}>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show when={showAside}>
          <GridItem
            area="aside"
            position="fixed"
            top={28}
            zIndex={5}
            bg={bg}
            padding={5}
          >
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main" paddingLeft={5}>
          <Box
            width="100%"
            spaceY={5}
            paddingBottom={2}
            paddingTop={14}
            paddingLeft={2}
            position="fixed"
            top={20}
            zIndex={5}
            bg={bg}
          >
            <GameHeading />
            <HStack>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>

          <GameGrid />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default HomePage;
