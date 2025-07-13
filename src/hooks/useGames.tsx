import type { GameQuery } from "@/App";

import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<fetchResponse<Game>>("/games");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchTerm,
        },
      }),
  });

export default useGames;
