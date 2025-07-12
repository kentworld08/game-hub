// import { platformsResults } from "@/data/platforms";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import type { Platform } from "./useGames";
import { platformsResults } from "@/data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 1000, //24h
    initialData: { count: platformsResults.length, results: platformsResults },
  });

export default usePlatforms;
