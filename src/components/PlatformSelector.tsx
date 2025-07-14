import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQuerySore from "@/store";
import { Button, HStack, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const setPlatformId = useGameQuerySore((s) => s.setPlatformId);

  const platformId = useGameQuerySore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" bg="black">
          <HStack>
            <Text color="white">{selectedPlatform?.name || "platforms"}</Text>{" "}
            <BsChevronDown color="white" />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                onClick={() => setPlatformId(platform.id)}
                key={platform.id}
                value={platform.name}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
