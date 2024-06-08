import { createAction, createReducer, current, nanoid, createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    },
    finishEditingPost: (state, action: PayloadAction<Post>) => {
      const editPost = action.payload
      state.postList.some((post, index) => {
        if (post.id === editPost.id) {
          state.postList[index] = editPost
          return true
        }
        return false
      })
      state.editingPost = null
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.postList.push(action.payload)
      },
      prepare: (post: Omit<Post, 'id'>) => {
        return {
          payload: {
            ...post,
            id: nanoid()
          }
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action) => {
          return action.type.includes('cancel')
        },
        (state, action) => {
          console.log(current(state))
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

export const { deletePost, startEditingPost, cancelEditingPost, finishEditingPost, addPost } = blogSlice.actions
const blogReducer = blogSlice.reducer

export default blogReducer
