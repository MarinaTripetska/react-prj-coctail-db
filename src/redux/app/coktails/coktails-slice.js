import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coktailsSlice = createApi({
  reducerPath: "coctails",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),

  // tagTypes: ["coctails"],

  endpoints: (builder) => ({
    getCoctailsListByFirstLatter: builder.query({
      query: (latter) => ({
        url: `/search.php?f=${latter}`,
        method: "GET",
      }),
      // providesTags: ["coctails"],
    }),

    getOneCoctailById: builder.query({
      query: (id) => ({
        url: `lookup.php?i=${id}`,
        method: "GET",
      }),
      // providesTags: ["coctails"],
    }),
  }),
});

export const {
  useGetCoctailsListByFirstLatterQuery,
  useGetOneCoctailByIdQuery,
} = coktailsSlice;
