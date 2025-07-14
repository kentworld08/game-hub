import type Game from "@/entities/Game";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root key={game.id}>
      <Image src={GetCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Header marginBottom={2} padding={0} fontSize="2xl" lineClamp={1}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Card.Header>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
