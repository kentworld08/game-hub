// import { platformsResults } from "@/data/platforms";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";

import { platformsResults } from "@/data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

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
