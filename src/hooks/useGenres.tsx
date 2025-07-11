import { genresResults } from "@/data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({
  data: genresResults,
  isLoading: false,
  error: null,
});

export default useGenres;
