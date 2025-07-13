import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import { platformsResults } from "@/data/platforms";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<fetchResponse<Platform>>(
  "/platforms/lists/parents"
);

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 1000, //24h
    initialData: { count: platformsResults.length, results: platformsResults },
  });

export default usePlatforms;
