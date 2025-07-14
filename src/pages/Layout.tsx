import NavBar from "@/components/NavBar";
import { GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <GridItem area="nav" position="sticky" top={0} zIndex={5} bg={"gray.900"}>
        <NavBar />
      </GridItem>
      <Outlet />
    </>
  );
};

export default Layout;
