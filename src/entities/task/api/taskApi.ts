import { baseApi } from "@shared/api/baseApi";
import type { ITask } from "@shared/constants";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => "todos",
      transformResponse: (response: ITask[]) => response,
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;
