import useGenres, { type Genre } from "@/hooks/useGenres";
import GetCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

interface Props {
  onselectGenre: (genreid: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onselectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <>
      <Heading fontWeight="bold" marginBottom={3} fontSize="2xl">
        Genre
      </Heading>
      <List.Root>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px" listStyle="none">
            <HStack>
              <Image
                src={GetCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                alt={`${genre.name} icon`}
              />
              <Button
                onClick={() => onselectGenre(genre)}
                margin={0}
                padding={0}
                variant="ghost"
                fontSize="sm"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
