import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "@/App";

interface Props {
  GameQuery: GameQuery;
}

const GameHeading = ({ GameQuery }: Props) => {
  const heading = `${GameQuery.platform?.name || ""} ${
    GameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontWeight="bold" fontSize={{ base: "2xl", sm: "3xl" }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
