import { Post } from "../types";
import { api } from "./api";

export const postApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation<Post, {content: string}>({
            query: (postData) => ({
                url: '/posts',
                method: 'POST',
                body: postData
            })
        }),
        getAllPost: builder.query<Post[], string>({
            query: () => ({
                url: '/posts',
                method: 'GET'
            })
        }),
        getPostById: builder.query<Post, string>({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'GET'
            })
        }),
        deletePost: builder.mutation<void, string>({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {
    useCreatePostMutation,
    useDeletePostMutation,
    useGetAllPostQuery,
    useGetPostByIdQuery,
    useLazyGetAllPostQuery,
    useLazyGetPostByIdQuery
} = postApi

export const {
    endpoints: { createPost, getAllPost, getPostById, deletePost }
} = postApi