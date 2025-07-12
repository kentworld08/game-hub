import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import { genresResults } from "@/data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<fetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<fetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genresResults.length, results: genresResults },
  });

export default useGenres;
