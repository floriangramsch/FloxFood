import { useQuery } from "@tanstack/react-query";

export function useTest() {
  return useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const response = await fetch(`/api/test`);
      const data = await response.json();
      return data;
    },
  });
}
