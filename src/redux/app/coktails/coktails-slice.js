import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coktailsSlice = createApi({
  reducerPath: "coktails",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),

  tagTypes: ["coktails", "coktail"],

  endpoints: (builder) => ({
    getCoctailsListByFirstLatter: builder.query({
      query: (latter) => ({
        url: `/search.php?f=${latter}`,
        method: "GET",
      }),
      providesTags: ["coktails"],
    }),

    getOneCoctailById: builder.query({
      query: (id) => ({
        url: `lookup.php?i=${id}`,
        method: "GET",
      }),
      providesTags: ["coktail"],
    }),

    getCoktailsByName: builder.query({
      query: (name) => ({
        url: `search.php?s=${name}`,
        method: "GET",
      }),
      providesTags: ["coktail"],
    }),
  }),
});

export const {
  useGetCoctailsListByFirstLatterQuery,
  useGetOneCoctailByIdQuery,
  // useGetCoktailsByNameQuery,
  useLazyGetCoktailsByNameQuery,
} = coktailsSlice;
