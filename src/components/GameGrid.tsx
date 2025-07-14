import useGames from "@/hooks/useGames";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

// import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error)
    <Text
      fontSize="2xl"
      textAlign="center"
      marginTop={28}
      color="red.500"
      zIndex={5}
    >
      No games found {error.message}{" "}
      <Button onClick={() => window.location.reload()}>Try again</Button>
    </Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={3}
      padding="10px"
      marginTop={28}
    >
      {isLoading &&
        Skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
