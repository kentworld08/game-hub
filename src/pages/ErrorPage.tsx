import NavBar from "@/components/NavBar";
import { Box, GridItem, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <GridItem area="nav" position="sticky" top={0} zIndex={5}>
        <NavBar />
      </GridItem>
      <Box padding={5}>
        <Heading>Oops!</Heading>
        <Text>
          {" "}
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};
