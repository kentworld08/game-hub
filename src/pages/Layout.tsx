import NavBar from "@/components/NavBar";
import { useColorModeValue } from "@/components/ui/color-mode";
import { GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <>
      <GridItem
        area="nav"
        position="sticky"
        top={0}
        zIndex={100}
        bg={bg}
        color={color}
        padding={5}
      >
        <NavBar />
      </GridItem>
      <Outlet />
    </>
  );
};

export default Layout;
