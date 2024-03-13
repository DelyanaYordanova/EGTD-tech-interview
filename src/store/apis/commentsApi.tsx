import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, LIMIT, PATH_COMMENTS, QUERY_PARAM_LIMIT } from "../../const";
import { Comment } from "../../types";

const commentsApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    fetchComments: builder.query<Comment[], void>({
      query: () => ({
        url: PATH_COMMENTS,
        params: {
          [QUERY_PARAM_LIMIT]: LIMIT,
        },
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchCommentsQuery } = commentsApi;
export { commentsApi };
