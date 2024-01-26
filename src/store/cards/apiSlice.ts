import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../../interfaces/ICards";

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.2:3000'}),
    tagTypes: ['cards'],
    endpoints: (builder) => ({
        getCards: builder.query<ICard[], void>({
            query: () => '/cards',
            providesTags: ['cards'],
            transformResponse: (response: ICard[]) => {
                return response
            }
        }),
        addCard: builder.mutation<ICard, ICard>({
            query: (card) => ({
                url: '/cards',
                body: card,
                method: 'POST',
            }),
            invalidatesTags: ['cards']
        })
    })
})