import { Button, HStack, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" bg="black">
          <HStack>
            <Text>platforms</Text> <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">1</Menu.Item>
            <Menu.Item value="new-txt">1</Menu.Item>
            <Menu.Item value="new-txt">1</Menu.Item>
            <Menu.Item value="new-txt">1</Menu.Item>
            <Menu.Item value="new-txt">1</Menu.Item>
            <Menu.Item value="new-txt">1</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
