import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
  GameQuery: GameQuery;
}

const GameHeading = ({ GameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === GameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === GameQuery.platformId);
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as="h1" fontWeight="bold" fontSize={{ base: "2xl", sm: "3xl" }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
