import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import router from "./routes";
import { Stack } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";

const queryClient = new QueryClient();

const App = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <Provider>
      <Stack bg={bg} color={color}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Stack>
    </Provider>
  );
};

export default App;
