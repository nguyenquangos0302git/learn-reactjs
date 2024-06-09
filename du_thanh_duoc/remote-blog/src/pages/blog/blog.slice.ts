import {
  createAction,
  createReducer,
  current,
  nanoid,
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AsyncThunk
} from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Post } from 'types/blog.type'
import http from 'utils/http'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface BlogState {
  postList: Post[]
  editingPost: Post | null
  loading: boolean
  currentRequestId: undefined | string
}

const initialState: BlogState = {
  postList: [],
  editingPost: null,
  loading: false,
  currentRequestId: undefined
}

// export const addPost = createAction('blog/addPost', (post: Omit<Post, 'id'>) => {
//   return {
//     payload: {
//       ...post,
//       id: nanoid()
//     }
//   }
// })
// export const deletePost = createAction<string>('blog/deletePost')
// export const startEditingPost = createAction<string>('blog/startEditingPost')
// export const cancelEditingPost = createAction('blog/cancelEditingPost')
// export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkApi) => {
  const response = await http.get<Post[]>('posts', {
    signal: thunkApi.signal
  })
  return response.data
})

export const addPost = createAsyncThunk('blog/addPost', async (body: Omit<Post, 'id'>, thunkApi) => {
  const response = await http.post<Post>('posts', body, {
    signal: thunkApi.signal
  })
  return response.data
})

export const updatePost = createAsyncThunk(
  'blog/updatePost',
  async ({ postId, body }: { postId: string; body: Post }, thunkApi) => {
    const response = await http.put<Post>(`posts/${postId}`, body, {
      signal: thunkApi.signal
    })
    return response.data
  }
)

export const deletePost = createAsyncThunk('blog/deletePost', async (postId: string, thunkApi) => {
  const response = await http.delete<Post>(`posts/${postId}`, {
    signal: thunkApi.signal
  })
  return response.data
})

const blogSlice = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
      state.editingPost = null
    },
    startEditingPost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    },
    cancelEditingPost: (state) => {
      state.editingPost = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPostList.fulfilled, (state, action) => {
        state.postList = action.payload
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.postList.push(action.payload)
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const postId = action.meta.arg
        const deletePostIndex = state.postList.findIndex((post) => post.id === postId)
        if (deletePostIndex !== -1) {
          state.postList.splice(deletePostIndex, 1)
        }
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.postList.find((post, index) => {
          if (post.id === action.payload.id) {
            state.postList[index] = action.payload
            return true
          }
          return false
        })
        state.editingPost = null
      })
      .addMatcher<PendingAction>(
        (action) => {
          return action.type.endsWith('/pending')
        },
        (state, action) => {
          state.loading = true
          state.currentRequestId = action.meta.requestId
        }
      )
      .addMatcher<RejectedAction | FulfilledAction>(
        (action) => {
          return action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled')
        },
        (state, action) => {
          if (state.loading && state.currentRequestId === action.meta.requestId) {
            state.loading = false
            state.currentRequestId = undefined
          }
        }
      )
      .addDefaultCase((state, action) => {
        console.log(`current action ${action.type} is not support. State:`, current(state))
      })
  }
})

// const blogReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addPost, (state, action) => {
//       state.postList.push(action.payload)
//     })
//     .addCase(deletePost, (state, action) => {
//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//     })
//     .addCase(startEditingPost, (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editingPost = foundPost
//     })
//     .addCase(cancelEditingPost, (state) => {
//       state.editingPost = null
//     })
//     .addCase(finishEditingPost, (state, action) => {
//       const editPost = action.payload
//       state.postList.some((post, index) => {
//         if (post.id === editPost.id) {
//           state.postList[index] = editPost
//           return true
//         }
//         return false
//       })
//       state.editingPost = null
//     })
//     .addMatcher(
//       (action) => {
//         return action.type.includes('cancel')
//       },
//       (state, action) => {
//         console.log(current(state))
//       }
//     )
//     .addDefaultCase((state) => state)
// })

// const blogReducer = createReducer(
//   initalState,
//   {
//     [addPost.type]: (state, action: PayloadAction<Post>) => {
//       // immerjs
//       // immerjs giúp chúng ta mutate một state an toàn
//       const post = action.payload
//       state.postList.push(post)
//     },
//     [deletePost.type]: (state, action) => {
//       console.log('start', current(state))
//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       }
//       console.log('finish', current(state))
//     },
//     [startEditingPost.type]: (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editingPost = foundPost
//     },
//     [cancelEditingPost.type]: (state) => {
//       state.editingPost = null
//     },
//     [finishEditingPost.type]: (state, action) => {
//       const postId = action.payload.id
//

// export default blogReducer

export const { startEditingPost, cancelEditingPost } = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
