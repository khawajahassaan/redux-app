import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMoviesFromAPI = createAsyncThunk(
    "movies/fetchMovies",
    async () => {
        const response = await fetch("https://dummyjson.com/users?limit=10&select=id,firstName");
        const data = await response.json();
        return data.users.map(users => ({
            id: users.id.toString(),
            name: users.firstName
        }));
    }
)

const initialState = {
    movies: [],
    status: 'idle',
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const newId = state.movies.length > 0
                ? parseInt(state.movies[state.movies.length - 1].id) + 1 : 1;

            const newMovie = { id: newId.toString(), name: action.payload };
            state.movies.push(newMovie);
        },
        removeMovie: (state, action) => {
            const id = action.payload;
            state.movies = state.movies.filter((movie) => movie.id !== id);
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesFromAPI.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMoviesFromAPI.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchMoviesFromAPI.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
