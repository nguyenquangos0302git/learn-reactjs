import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface BlogState {
  postId: string
}

const initialState: BlogState = {
  postId: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {
    startEditPost: (state, action: PayloadAction<string>) => {
      state.postId = action.payload
    },
    cancelEditPost: (state) => {
      state.postId = ''
    }
  }
})

const blogReducer = blogSlice.reducer
export const { startEditPost, cancelEditPost } = blogSlice.actions
export default blogReducer
