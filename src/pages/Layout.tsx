import NavBar from "@/components/NavBar";
import { Box, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <GridItem
        area="nav"
        position="sticky"
        top={0}
        zIndex={5}
        bg={"gray.900"}
        padding={5}
      >
        <NavBar />
      </GridItem>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
