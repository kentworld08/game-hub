import useGenres from "@/hooks/useGenres";
import GetCroppedImageUrl from "@/services/image-url";
import useGameQuerySore from "@/store";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  const setGenreId = useGameQuerySore((s) => s.setGenreId);
  const selectedGenreId = useGameQuerySore((s) => s.gameQuery.genreId);
  return (
    <>
      <Heading fontWeight="bold" marginBottom={3} fontSize="2xl">
        Genre
      </Heading>
      <List.Root
        overflow="auto"
        maxHeight="80vh"
        paddingBottom={5}
        scrollbar="hidden"
      >
        {data?.results.map((genre) => (
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
                onClick={() => setGenreId(genre.id)}
                margin={0}
                padding={0}
                variant="ghost"
                fontSize="sm"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
