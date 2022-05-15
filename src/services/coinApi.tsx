import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface coinHistory {
  uuid: string;
  timePeriod: string;
}

console.log(process.env.REACT_APP_SECRET_NAME);

const cryptoApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_RAPID_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const coinApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count: number) => (count ? createRequest(`/coins?limit=${count}`) : createRequest("/coins")),
    }),
    getCoin: builder.query({
      query: (uuid: string) => createRequest(`/coin/${uuid}?timePeriod=24h`),
    }),
    getCoinHistory: builder.query({
      query: ({ uuid, timePeriod }: coinHistory) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const { useGetCoinsQuery } = coinApi;
export const { useGetCoinQuery } = coinApi;
export const { useGetCoinHistoryQuery } = coinApi;
