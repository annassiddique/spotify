import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"






export const shazamcoreapi = createApi({
    reducerPath: "shazamapi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '04598006bfmsh334d2f148555c83p1b8dfbjsn47dd4f32028f');
            return headers
        },
    }),
    endpoints: (builder) => {
        getTopCharts: builder.query({ query: () => { '/charts/tracks' } });

    }
});

export const {
    useGetTopChartsQuery,
} = shazamcoreapi;