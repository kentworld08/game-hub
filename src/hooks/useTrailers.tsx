import type { Trailer } from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
  const apiclient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useTrailers;
