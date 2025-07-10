import useGenres, { type Genre } from "@/hooks/useGenres";
import GetCroppedImageUrl from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onselectGenre: (genreid: Genre) => void;
}

const GenreList = ({ onselectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px" listStyle="none">
          <HStack>
            <Image
              src={GetCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              onClick={() => onselectGenre(genre)}
              margin={0}
              padding={0}
              variant="ghost"
              fontSize="sm"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
