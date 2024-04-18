import { apiClient } from "@/common/apiClient";

export const getNotes = async () => {
  const res = await apiClient.notes.$get();
  return await res.json();
};

export const createNote = async (title: string, body: string) => {
  const res = await apiClient.notes.$post({
    json: {
      note: {
        title: title,
        body: body,
      },
    },
  });
  return await res.json();
};
