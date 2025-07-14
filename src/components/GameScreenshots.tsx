import useScreenShots from "@/hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);
  if (error) throw error;
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spaceX={2} spaceY={2}>
      {isLoading &&
        Skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton height="150px" />
          </GameCardContainer>
        ))}

      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
