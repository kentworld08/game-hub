import { Button, HStack, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { sortOrders } from "@/data/sortOrder";
import useGameQuerySore from "@/store";

const SortSelector = () => {
  const setSortOrder = useGameQuerySore((s) => s.setSortOrder);
  const sortOrder = useGameQuerySore((s) => s.gameQuery.sortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" bg="black">
          <HStack>
            <Text color="white">Order by: {sortOrder || "Relevance"}</Text>{" "}
            <BsChevronDown color="white" />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => setSortOrder(order.label)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
