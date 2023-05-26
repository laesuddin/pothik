import { apiSlice } from "../api/apiSlice";

export const addPackageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPackage: builder.mutation({
      query: (data) => {
        let updatedData = data.route.split(" ");
        data.route = updatedData;
        return {
          url: "/packages",
          method: "POST",
          body: data,
        };
      },
    }),
    getPackage: builder.query({
      query: () => "/packages",
    }),
  }),
});

export const { useAddPackageMutation, useGetPackageQuery } = addPackageApi;
