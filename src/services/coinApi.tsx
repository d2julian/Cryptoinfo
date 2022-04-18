import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Headers = {
  "x-rapidapi-host": string;
  "x-rapidapi-key": string;
};

type Result = {};

interface coinHistory {
  uuid: string;
  timePeriod: string;
}

const cryptoApiHeaders: Headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "82c99c649emsh2064b4a5bc23b61p154057jsnc6cba450ef58",
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
    getCoin: builder.query<Result, string>({
      query: (uuid: string) => createRequest(`/coin/${uuid}?timePeriod=24h`),
    }),
    getCoinHistory: builder.query<Result, coinHistory>({
      query: ({ uuid, timePeriod }: coinHistory) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const { useGetCoinsQuery } = coinApi;
export const { useGetCoinQuery } = coinApi;
export const { useGetCoinHistoryQuery } = coinApi;
