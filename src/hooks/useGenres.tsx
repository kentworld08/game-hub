import { useQuery } from "@tanstack/react-query";
import type { fetchResponse } from "@/services/api-client";
import { genresResults } from "@/data/genre";
import APIClient from "@/services/api-client";
import type { Genre } from "../entities/Genre";

const apiClient = new APIClient<fetchResponse<Genre>>("/genres");
const useGenres = () =>
  useQuery<fetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genresResults.length, results: genresResults },
  });

export default useGenres;
