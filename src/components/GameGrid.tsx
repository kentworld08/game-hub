import useGames from "@/hooks/useGames";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <Box>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap="10px"
          padding="10px"
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}{" "}
    </Box>
  );
};

export default GameGrid;
