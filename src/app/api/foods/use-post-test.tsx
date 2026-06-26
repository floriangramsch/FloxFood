import { useMutation } from "@tanstack/react-query";

export const usePostTest = () => {
  return useMutation({
    mutationFn: async (query: string) => {
      const response = await fetch("/api/foods/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return response.json();
    },
  });
};
