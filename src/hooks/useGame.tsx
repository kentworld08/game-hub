import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Game } from "../entities/Game";

const apiclient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["gmaes", slug],
    queryFn: () => apiclient.getSingle(slug),
  });

export default useGame;
