import { createAction, createReducer } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
  editingPost: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editingPost: null
}

export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<string>('blog/startEditingPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      state.postList.push(action.payload)
    })
    .addCase(deletePost, (state, action) => {
      state.postList = state.postList.filter((post) => post.id !== action.payload)
    })
    .addCase(startEditingPost, (state, action) => {
      state.postList = state.postList.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload
        }
        return post
      })
    })
    .addDefaultCase((state) => state)
})

export default blogReducer
