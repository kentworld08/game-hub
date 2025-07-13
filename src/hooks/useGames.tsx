import type { GameQuery } from "@/App";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
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

const useGames = (gameQuery: GameQuery, pageParam: number) =>
  useQuery<fetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchTerm,
          pageParam,
        },
      }),
    placeholderData: keepPreviousData,
  });

export default useGames;
