import { Heading } from "@chakra-ui/react";
import usePlatform from "@/hooks/usePlatform";
import useGenre from "@/hooks/useGenre";
import useGameQuerySore from "@/store";

const GameHeading = () => {
  const genreId = useGameQuerySore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuerySore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as="h1" fontWeight="bold" fontSize={{ base: "2xl", sm: "3xl" }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
