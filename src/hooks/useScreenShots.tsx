import type { Screenshot } from "@/entities/Screenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenShots = (gameId: number) => {
  const apiclient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useScreenShots;
