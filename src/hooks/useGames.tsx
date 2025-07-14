import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import APIClient from "@/services/api-client";
import useGameQuerySore from "@/store";

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

const apiClient = new APIClient<fetchResponse<Game>>("/games");

const useGames = () => {
  const gameQuery = useGameQuerySore((s) => s.gameQuery);

  return useQuery<fetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchTerm,
        },
      }),
    placeholderData: keepPreviousData,
  });
};

export default useGames;
