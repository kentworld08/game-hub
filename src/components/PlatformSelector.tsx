import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, HStack, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (Platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" bg="black">
          <HStack>
            <Text>{selectedPlatform?.name || "platforms"}</Text>{" "}
            <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
                value="new-txt"
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
