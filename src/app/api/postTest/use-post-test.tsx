import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostTest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (test: string) => {
      const response = await fetch("/api/postTest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(test),
      });
      return await response.json();
    },
    onSuccess: () => queryClient.invalidateQueries(),
  });
};
