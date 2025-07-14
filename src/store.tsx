import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchTerm?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchTerm: (searchTerm: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQuerySore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchTerm: (searchTerm) =>
    set(() => ({ gameQuery: { searchTerm: searchTerm } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
    })),
}));

export default useGameQuerySore;
