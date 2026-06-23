import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const response = await fetch("https://dummyjson.com/posts?limit=5");
        const data = await response.json();
        return data.posts;
    }
);

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: 'idle',
    },
    reducers: {
        addPost: (state, action) => {
            const newId = state.posts.length > 0
                ? parseInt(state.posts[state.posts.length - 1].id) + 1 : 1;

            const newPost = {
                id: newId.toString(),
                title: action.payload,
                body: "This is a custom post added manually.",
                reactions: { likes: random(), dislikes: random() }
            };
            state.posts.push(newPost);
        },
        removePost: (state, action) => {
            const id = action.payload;
            state.posts = state.posts.filter((post) => post.id !== id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            });
    }
});

export const { addPost, removePost } = postSlice.actions;
export default postSlice.reducer;
